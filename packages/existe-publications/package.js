Package.describe({
  name: 'existe:publications',
  version: '0.0.1',
  summary: 'Publications module to serve clients',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.0.1');
  /**
   * Meteor dependencies
   */
  api.use([
    'webpack:webpack',
    'check'
  ]);
  /**
   * Existe dependencies
   */
  api.use([
    'existe:core',
  ])

  api.addFiles([
    'lib/server/areas.js',
    'lib/server/projects.js',
  ], 'server')
});

Package.onTest(function(api) {
  api.use('ecmascript');
});
