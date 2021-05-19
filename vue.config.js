// Inside vue.config.js
module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    name: 'Pokedex',
    themeColor: '#f5db13',
    msTileColor: '#F5DB13',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      background_color: '#F5DB13',
    },
  },
};
