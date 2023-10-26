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
          theme: './src/theme',
          atoms: './src/components/atoms',
          molecules: './src/components/molecules',
          organisms: './src/components/organisms',
          icons: './src/components/icons',
          store: './src/store',
          navigation: './src/navigation',
          gql: './src/gql',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
