import StyleDictionary from 'style-dictionary';

const cssVarName = (path) => `--${path.join('-')}`; // e.g., color-brand or font-size-body

export default {
  hooks: {
    formats: {
      'css/theme': ({ dictionary, options }) => {
        const { selector = ':root' } = options || {};
        const lines = dictionary.allTokens.map(t => `    ${cssVarName(t.path)}: ${t.value};`);
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
    json: {
      transformGroup: 'js',
      buildPath: 'dist/json/',
      files: [{ destination: 'tokens.json', format: 'json/nested' }]
    }
  }
};