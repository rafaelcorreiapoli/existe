Package.describe({
  name: 'existe:models',
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
   * Existe dependencies
   */
  api.use([
    'existe:core',
    'existe:schemas'
  ])
  /**
   * Thirdy party dependencies
   */
  api.use([
    'zimme:collection-timestampable'
  ])

  api.mainModule('index.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
});
