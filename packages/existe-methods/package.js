Package.describe({
  name: 'existe:methods',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.0.1');
  /**
   * Meteor dependencies
   */
  api.use('webpack:webpack');
  /**
   * Existe Dependencies
   */
  api.use([
    'existe:models',
  ])
  /**
   * Thirdy party dependencies
   */
  api.use([
    'mdg:validated-method@1.1.0',
    'aldeed:simple-schema',
    'accounts-base'
  ])

  api.mainModule('index.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
});
