const glob = require("glob")

module.exports = {
  "entryPoints": glob.sync("src/components/cdp/**/*.interface.ts"),
  "out": "typedoc",
  "hideBreadcrumbs": true,
  "hideInPageTOC": true,
  "categorizeByGroup": false,
  "disableSources": true,
  "excludeExternals": true
}
