Package.describe({
  name: 'existe:core',
  version: '0.0.1',
  summary: 'Core libraries for Existe packages',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.0.1');
  /**
   * Meteor base dependencies
   */
  const baseDependencies = [
    'webpack:webpack',
    'mongo',
    'meteor-base',
    'standard-minifier-js'
  ]
  api.use(baseDependencies)
  api.imply(baseDependencies)

  /**
   * Thirdy party dependencies
   */
  const thirdyPartyDependencies = [
    'aldeed:collection2',
    'matb33:collection-hooks',
    'zimme:collection-behaviours',
  ]
  api.use(thirdyPartyDependencies)
  api.imply(thirdyPartyDependencies)

  api.mainModule('index.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('existe:core');
  api.mainModule('core-tests.js');
});
