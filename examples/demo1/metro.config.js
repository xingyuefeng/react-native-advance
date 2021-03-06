/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

const watchFolders = [
  //Relative path to packages directory
  path.resolve(__dirname + '/../../packages/add'),
];

module.exports = {
  // resolver: {
  //   extraNodeModules: {
  //     add: path.resolve(`${__dirname}/lib/add/lib`),
  //   },
  // },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  watchFolders,
};
