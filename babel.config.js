module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@contexts': './src/contexts',
            '@dtos': './src/dtos',
            '@hooks': './src/hooks',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@services': './src/services',
            '@storage': './src/storage',
            '@utils': './src/utils'
          }
        },
      ],
    ],
  };
};
