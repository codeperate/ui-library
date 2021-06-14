const plugin = require('windicss/plugin')

module.exports = {
  extract: {
    extractors: [
      {
        extractor: (content) => {
          const classes = (content.match(/".*?"|'.*?'|{`.*?`}/g) ?? []).map((str) => str.replace(/`|"|{|}|'/g, ""))
          return { classes: classes }
        },
        extensions: ['tsx'],
      },
    ],
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('expanded', ({ modifySelectors }) =>
        modifySelectors(({ className }) =>
          `.expanded .${className}`
        )
      )
    })
  ]
};
