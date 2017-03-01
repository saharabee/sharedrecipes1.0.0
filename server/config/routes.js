var recipes = require('../controllers/recipes'),
    mongoose = require('mongoose'),
    Recipe = mongoose.model('Recipe');

module.exports = function(app) {
  app.get('/api/recipes', recipes.getRecipes);
  
  app.all('/api/*', function(req, res) {
    res.send(404);
  });
  
}