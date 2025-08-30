import { Typography } from '@eliseoeric/typography'

export default function VersionComparisonDemo() {
  return (
    <section className="space-y-6">
      <Typography variant="h2">
        Version Coexistence Demo
      </Typography>
      
      <div className="p-6 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
        <Typography variant="h4" className="mb-4 text-center">
          🚧 Version Coexistence Coming Soon
        </Typography>
        
        <Typography variant="body" className="text-gray-600 text-center mb-4">
          This section will demonstrate side-by-side usage of different component versions 
          using npm aliases, showcasing how v1 and v2 components can coexist without conflicts.
        </Typography>
        
        <div className="space-y-4">
          <Typography variant="h5">Planned Implementation:</Typography>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
            <li>
              <strong>NPM Aliases:</strong> Install multiple versions using aliases like 
              <code className="bg-gray-200 px-1 rounded">"ds-v1": "npm:@eliseoeric/primitives@^1.0.0"</code>
            </li>
            <li>
              <strong>CSS Isolation:</strong> Version-prefixed CSS variables 
              (<code className="bg-gray-200 px-1 rounded">--ds-v1-color-primary</code>, 
              <code className="bg-gray-200 px-1 rounded">--ds-v2-color-primary</code>)
            </li>
            <li>
              <strong>Side-by-Side Components:</strong> Render ButtonV1 and ButtonV2 simultaneously 
              without style conflicts
            </li>
            <li>
              <strong>Modal Isolation:</strong> Demonstrate v2 Modal content in Shadow DOM wrapper
            </li>
          </ul>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <Typography variant="body" className="text-blue-800">
            <strong>Note:</strong> This feature requires the multi-package versioning infrastructure 
            described in the component-versioning-strategy.md document. Once implemented, 
            this demo will showcase true version coexistence capabilities.
          </Typography>
        </div>
      </div>
    </section>
  )
}