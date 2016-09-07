Package.describe({
  name: 'existe:accounts',
  version: '0.0.1',
  summary: 'Existe authentication package',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.0.1');
  api.use([
    'webpack:webpack',
    'accounts-password',
    'accounts-base',
    'service-configuration',
    'accounts-facebook'
  ]);
  api.use([
    'pauli:accounts-linkedin'
  ])
  api.addFiles('lib/server/config.js', 'server');
  api.addFiles('lib/server/oauth_exchange.js', 'server');
  api.addFiles('lib/server/facebook.js', 'server');
  api.addFiles('lib/server/linkedin.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('existe:accounts');
  api.mainModule('accounts-tests.js');
});
