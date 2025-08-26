import StyleDictionary from 'style-dictionary';

const cssVarName = (path) => `--${path.join('-')}`; // e.g., color-brand or font-size-body

export default {
  hooks: {
    formats: {
      'css/vars-no-hsl-wrapper': ({ dictionary, options }) => {
        const { selector = ':root' } = options || {};
        const lines = dictionary.allTokens.map(t => `  ${cssVarName(t.path)}: ${t.value};`);
        return `${selector}{\n${lines.join('\n')}\n}\n`;
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
        { destination: 'tokens.css', format: 'css/vars-no-hsl-wrapper', options: { selector: ':root' } }
      ]
    },
    json: {
      transformGroup: 'js',
      buildPath: 'dist/json/',
      files: [{ destination: 'tokens.json', format: 'json/nested' }]
    }
  },
  hooks: {
    formats: {
      'css/vars-no-hsl-wrapper': ({ dictionary, options }) => {
        const { selector = ':root' } = options || {};
        const lines = dictionary.allTokens.map(t => `  ${cssVarName(t.path)}: ${t.value};`);
        return `${selector}{\n${lines.join('\n')}\n}\n`;
      }
    }
  }
};
