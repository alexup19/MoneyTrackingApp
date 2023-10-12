module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.json',
          '.png',
        ],
        alias: {
          api: './src/api',
          screens: './src/screens',
          utils: './src/utils',
          atoms: './src/components/atoms',
          molecules: './src/components/molecules',
          icons: './src/components/icons',
          store: './src/store',
          navigation: './src/navigation',
          gql: './src/gql',
        },
      },
    ],
  ],
};
