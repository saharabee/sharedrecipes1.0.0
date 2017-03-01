var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://user:passw0rd@ds054999.mlab.com:54999/sharedrecipes',
    rootPath: rootPath,
    port: process.env.PORT || 3000
  },
  production: {
    rootPath: rootPath,
    db: 'mongodb://user:passw0rd@ds054999.mlab.com:54999/sharedrecipes',
    port: process.env.PORT || 80
  }
}