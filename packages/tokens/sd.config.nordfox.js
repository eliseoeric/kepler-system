import StyleDictionary from 'style-dictionary';

const cssVarName = (path) => `--${path.join('-')}`; // e.g., color-brand or font-size-body

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
    }
  },
  hooks: {
    formats: {
      'css/theme': ({ dictionary, options }) => {
        const { selector = ':root' } = options || {};
        const lines = dictionary.allTokens.map(t => `  ${cssVarName(t.path)}: ${t.value};`);
        return `${selector} {\n${lines.join('\n')}\n}\n`;
      }
    }
  }
};