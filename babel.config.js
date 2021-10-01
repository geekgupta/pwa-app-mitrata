module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  babelrcRoots: [
    // Keep the root as a root
    ".",

    // Also consider monorepo packages "root" and load their .babelrc.json files.
    "./packages/*",
  ]
};
