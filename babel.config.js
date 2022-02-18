module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',            
            '@components': './src/components',
            '@constants': './src/constants',
            '@helpers': './src/helpers',
            '@navigation': './src/navigation',
            '@screens': './src/screens',
            '@shared': './src/shared',
            '@store': './src/store',
          },
        },
      ],
    ],
  };
};
