const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'microFeTwo', // Matches 'microFeTwo' in MainApp
      filename: 'remoteEntry.js',
      exposes: {
        './ContentApp': './src/App', // Exposing the ContentApp component
      },
    }),
  ],
};
