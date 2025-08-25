import StyleDictionary from 'style-dictionary';

const cssVarName = (path) => `--${path.join('-')}`; // e.g., color-brand or font-size-body

export default {
  source: ['src/base.json', 'src/themes/atlas.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/css/',
      files: [
        {
          destination: 'theme-atlas.css',
          format: 'css/vars-no-hsl-wrapper',
          options: { selector: '[data-brand="atlas"]' }
        }
      ]
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
