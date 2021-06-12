module.exports = {
  extract: {
    extractors: [
      {
        extractor: (content) => {
          const classes = (content.match(/{`[^]+`}|"[^"]+"|'[^']+'/g) ?? []).map((str) => str.replace(/`|"|{|}|'/g, ""))
          return { classes: classes }
        },
        extensions: ['tsx'],
      },
    ],
  },
  plugins: [
  ]
};
