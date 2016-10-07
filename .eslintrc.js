// const config = {
//   "parser": "babel-eslint",
//   "extends": "airbnb",
//   "plugins": [
//     "react"
//   ],
//   "globals": {}, // added programatically later
//   "parserOptions":{
//     "ecmaFeatures": {
//       "experimentalObjectRestSpread": true,
//     },
//   },
//   globals: {
//     Meteor: true,
//     FlowRouter: true,
//   },
// };
//
//
//
// module.exports = config;

const config = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
    "semi": 0,
    "import/no-extraneous-dependencies": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prefer-stateless-function": 0,
    "no-underscore-dangle": 0,
    "new-cap": ["error", {
      "capIsNew": false,
    }],
    "no-useless-rename": 0,
    "react/no-unused-prop-types": 0,
    "react/forbid-prop-types": 0,
  },
  "settings": {
   "import/resolver": {
     "babel-module": {}
   }
 }
}

module.exports = config
