module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ["@babel/plugin-transform-optional-catch-binding"],
        
      },
    },
  };
};