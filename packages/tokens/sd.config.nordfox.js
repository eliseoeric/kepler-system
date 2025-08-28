import StyleDictionary from 'style-dictionary';

const cssVarName = (path, version = null) => {
  if (version) {
    return `--ds-v${version}-${path.join('-')}`;
  }
  return `--${path.join('-')}`;
};

export default {
  source: ['src/base.json', 'src/themes/nordfox.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/css/',
      files: [
        {
          destination: 'theme-nordfox.css',
          format: 'css/theme',
          options: { selector: '[data-theme="nordfox"]' }
        }
      ]
    },
    // Versioned theme builds
    'css-v1': {
      transformGroup: 'css',
      buildPath: 'dist/css/v1/',
      files: [
        {
          destination: 'theme-nordfox.css',
          format: 'css/versioned',
          options: { selector: '[data-theme="nordfox"]', version: '1' }
        }
      ]
    },
    'css-v2': {
      transformGroup: 'css',
      buildPath: 'dist/css/v2/',
      files: [
        {
          destination: 'theme-nordfox.css',
          format: 'css/versioned',
          options: { selector: '[data-theme="nordfox"]', version: '2' }
        }
      ]
    }
  },
  hooks: {
    formats: {
      'css/theme': ({ dictionary, options }) => {
        const { selector = ':root', version = null } = options || {};
        const lines = dictionary.allTokens.map(t => `  ${cssVarName(t.path, version)}: ${t.value};`);
        return `${selector} {\n${lines.join('\n')}\n}\n`;
      },
      'css/versioned': ({ dictionary, options }) => {
        const { selector = ':root', version = '1' } = options || {};
        const lines = dictionary.allTokens.map(t => `  ${cssVarName(t.path, version)}: ${t.value};`);
        return `${selector} {\n${lines.join('\n')}\n}\n`;
      }
    }
  }
};