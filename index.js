const yeoman = require('yeoman-environment');
const env = yeoman.createEnv();

env.lookup(function () {
  env.run('react-redux-admin', {'skip-install': false}, function (err) {
    console.log('done');
  });
});
