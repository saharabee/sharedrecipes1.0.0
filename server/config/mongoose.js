var mongoose = require('mongoose'),
    options = { promiseLibrary: require('bluebird') },
    recipeModel = require('../models/Recipe');

module.exports = function(config) {
  mongoose.connect(config.db, options);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('sharedrecipes db opened');
  });

  recipeModel.createDefaultRecipes();
};
