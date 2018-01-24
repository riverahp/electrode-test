module.exports = {
  cache: {
    cacheId: "elec",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "elec",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
