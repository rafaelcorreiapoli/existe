Package.describe({
  name: 'existe:schemas',
  version: '0.0.1',
  summary: 'Schemas package for Existe App',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.0.1');
  /**
   * Meteor dependencies
   */
  api.use([
    //  'ecmascript',
    'webpack:webpack',
  ]);
  /**
   * Thirdy party dependencies
   */
  api.use([
    'aldeed:simple-schema'
  ])

  api.mainModule('index.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
});
