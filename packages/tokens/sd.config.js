import StyleDictionary from 'style-dictionary';

const cssVarName = (path, version = null) => {
  if (version) {
    return `--ds-v${version}-${path.join('-')}`;
  }
  return `--${path.join('-')}`;
};

export default {
  hooks: {
    formats: {
      'css/theme': ({ dictionary, options }) => {
        const { selector = ':root', version = null } = options || {};
        const lines = dictionary.allTokens.map(t => `    ${cssVarName(t.path, version)}: ${t.value};`);
        return `${selector} {\n  @theme {\n${lines.join('\n')}\n  }\n}\n`;
      },
      'css/versioned': ({ dictionary, options }) => {
        const { selector = ':root', version = '1' } = options || {};
        const lines = dictionary.allTokens.map(t => `    ${cssVarName(t.path, version)}: ${t.value};`);
        return `${selector} {\n  @theme {\n${lines.join('\n')}\n  }\n}\n`;
      }
    }
  },
  // Base build
  source: ['src/base.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/css/',
      files: [
        { destination: 'tokens.css', format: 'css/theme', options: { selector: ':root' } }
      ]
    },
    // Versioned CSS builds
    'css-v1': {
      transformGroup: 'css',
      buildPath: 'dist/css/v1/',
      files: [
        { destination: 'tokens.css', format: 'css/versioned', options: { selector: ':root', version: '1' } }
      ]
    },
    'css-v2': {
      transformGroup: 'css',
      buildPath: 'dist/css/v2/',
      files: [
        { destination: 'tokens.css', format: 'css/versioned', options: { selector: ':root', version: '2' } }
      ]
    },
    json: {
      transformGroup: 'js',
      buildPath: 'dist/json/',
      files: [{ destination: 'tokens.json', format: 'json/nested' }]
    }
  }
};