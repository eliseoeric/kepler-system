import StyleDictionary from 'style-dictionary';

const cssVarName = (path) => `--${path.join('-')}`; // e.g., color-brand or font-size-body

// Custom format to emit CSS variables, leaving HSL components unwrapped (so Tailwind can do alpha)
StyleDictionary.registerFormat({
  name: 'css/vars-no-hsl-wrapper',
  formatter: ({ dictionary, options }) => {
    const { selector = ':root' } = options || {};
    const lines = dictionary.allTokens.map(t => `  ${cssVarName(t.path)}: ${t.value};`);
    return `${selector}{\n${lines.join('\n')}\n}\n`;
  }
});

export default {
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
  // Hook to also build themes
  hooks: {
    afterAll: async function() {
      const themes = ['finance', 'logistics'];
      for (const theme of themes) {
        const sd = StyleDictionary.extend({
          source: ['src/base.json', `src/themes/${theme}.json`],
          platforms: {
            css: {
              transformGroup: 'css',
              buildPath: 'dist/css/',
              files: [
                {
                  destination: `theme-${theme}.css`,
                  format: 'css/vars-no-hsl-wrapper',
                  options: { selector: `[data-brand="${theme}"]` }
                }
              ]
            }
          }
        });
        sd.buildAllPlatforms();
      }
    }
  }
};
