#!/bin/bash
set -euo pipefail

# Auto-generate changesets from conventional commits
# Usage: ./scripts/generate-changesets.sh <last_commit>

LAST_COMMIT="${1:-}"

if [[ -z "$LAST_COMMIT" ]]; then
  echo "Error: Last commit hash is required"
  echo "Usage: $0 <last_commit>"
  exit 1
fi

echo "Generating changesets from commits between $LAST_COMMIT and HEAD"

# Function to get package name from package.json
get_package_name() {
  local package_json="$1"
  if [[ -f "$package_json" ]]; then
    jq -r '.name // empty' "$package_json" 2>/dev/null || echo ""
  else
    echo ""
  fi
}

# Function to discover packages dynamically
discover_packages() {
  local changed_files="$1"
  local packages=""
  
  # Find all package.json files in packages/ directory
  while IFS= read -r -d '' package_json; do
    local package_dir
    package_dir=$(dirname "$package_json")
    local package_name
    package_name=$(get_package_name "$package_json")
    
    # Skip if no package name or if it's a private/internal package
    if [[ -z "$package_name" || "$package_name" == "null" ]]; then
      continue
    fi
    
    # Check if any changed files are in this package directory
    if echo "$changed_files" | grep -q "^$package_dir/"; then
      if [[ -n "$packages" ]]; then
        packages="$packages $package_name"
      else
        packages="$package_name"
      fi
      echo "  Found changes in $package_dir -> $package_name"
    fi
  done < <(find packages/ -name "package.json" -print0 2>/dev/null || true)
  
  echo "$packages"
}

# Function to determine version bump type
get_version_bump() {
  local commit_type="$1"
  local has_breaking="$2"
  
  if [[ "$has_breaking" == "true" ]]; then
    echo "major"
  elif [[ "$commit_type" == "feat" ]]; then
    echo "minor"
  elif [[ "$commit_type" =~ ^(fix|perf)$ ]]; then
    echo "patch"
  else
    echo ""  # No version bump for other types
  fi
}

# Function to parse conventional commit
parse_conventional_commit() {
  local commit_message="$1"
  local result=""
  
  # Improved regex for conventional commits - using a more compatible approach
  # Supports: type(scope): description and type(scope)!: description
  local regex='^(feat|fix|perf|refactor|style|test|docs|ci|chore|revert)(\([^)]+\))?(!)?:[[:space:]](.+)$'
  
  if [[ $commit_message =~ $regex ]]; then
    local type="${BASH_REMATCH[1]}"
    local scope="${BASH_REMATCH[2]}"  # includes parentheses
    local breaking_marker="${BASH_REMATCH[3]}"
    local description="${BASH_REMATCH[4]}"
    
    # Remove parentheses from scope
    scope="${scope#(}"
    scope="${scope%)}"
    
    # Check for breaking change indicator
    local has_breaking="false"
    if [[ "$breaking_marker" == "!" ]] || echo "$commit_message" | grep -q "BREAKING CHANGE:"; then
      has_breaking="true"
    fi
    
    result="type:$type|scope:$scope|breaking:$has_breaking|description:$description"
  fi
  
  echo "$result"
}

# Get commits since last release
COMMITS=$(git log --pretty=format:"%H|%s" "$LAST_COMMIT..HEAD")

if [[ -z "$COMMITS" ]]; then
  echo "No commits found between $LAST_COMMIT and HEAD"
  exit 0
fi

echo "Found $(echo "$COMMITS" | wc -l) commits to process"

# Process each commit
while IFS='|' read -r commit_hash commit_message; do
  if [[ -z "$commit_hash" ]]; then
    continue
  fi
  
  echo ""
  echo "Processing commit: $commit_hash"
  echo "  Message: $commit_message"
  
  # Parse conventional commit format
  parsed=$(parse_conventional_commit "$commit_message")
  
  if [[ -z "$parsed" ]]; then
    echo "  ⚠️  Skipping: Not a valid conventional commit"
    continue
  fi
  
  # Extract parsed components
  type=$(echo "$parsed" | grep -o 'type:[^|]*' | cut -d: -f2)
  scope=$(echo "$parsed" | grep -o 'scope:[^|]*' | cut -d: -f2)
  has_breaking=$(echo "$parsed" | grep -o 'breaking:[^|]*' | cut -d: -f2)
  description=$(echo "$parsed" | grep -o 'description:.*' | cut -d: -f2-)
  
  echo "  Type: $type, Scope: $scope, Breaking: $has_breaking"
  
  # Determine version bump
  bump=$(get_version_bump "$type" "$has_breaking")
  
  if [[ -z "$bump" ]]; then
    echo "  ⚠️  Skipping: No version bump required for type '$type'"
    continue
  fi
  
  echo "  Version bump: $bump"
  
  # Get changed files for this commit
  changed_files=$(git show --name-only --pretty=format: "$commit_hash")
  
  if [[ -z "$changed_files" ]]; then
    echo "  ⚠️  Skipping: No files changed"
    continue
  fi
  
  echo "  Changed files:"
  echo "$changed_files" | sed 's/^/    /'
  
  # Discover affected packages
  packages=$(discover_packages "$changed_files")
  
  if [[ -z "$packages" ]]; then
    echo "  ⚠️  Skipping: No packages affected"
    continue
  fi
  
  echo "  Affected packages: $packages"
  
  # Create changeset
  changeset_id="auto-$(date +%s%N | cut -b1-13)-$(echo "$commit_hash" | cut -c1-7)"
  changeset_file=".changeset/${changeset_id}.md"
  
  echo "  Creating changeset: $changeset_file"
  
  # Ensure .changeset directory exists
  mkdir -p .changeset
  
  # Generate changeset content
  {
    echo "---"
    for package in $packages; do
      echo "\"$package\": $bump"
    done
    echo "---"
    echo ""
    if [[ "$has_breaking" == "true" ]]; then
      echo "**BREAKING CHANGE:** $description"
    else
      echo "$description"
    fi
    echo ""
    echo "<!-- Auto-generated from commit $commit_hash -->"
  } > "$changeset_file"
  
  echo "  ✅ Changeset created successfully"
  git add "$changeset_file"
  
done <<< "$COMMITS"

echo ""
echo "Changeset generation complete!"

# Show summary of created changesets
created_changesets=$(git diff --staged --name-only | grep "^\.changeset/.*\.md$" || true)
if [[ -n "$created_changesets" ]]; then
  echo "Created changesets:"
  echo "$created_changesets" | sed 's/^/  /'
else
  echo "No changesets created"
fi
