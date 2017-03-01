var mongoose = require('mongoose');

var recipeSchema = mongoose.Schema({
    name: {type: String, required: '{PATH} is required!'},
    description: {type: String, required: '{PATH} is required!'},
    ingridients: [String],
    steps: [String]
});

var Recipe = mongoose.model('Recipe', recipeSchema);

function createDefaultRecipes(){
    Recipe.find({}).exec(function(err, collection){
        if(collection.length===0){
            Recipe.create({
                name:'Pan Seared Salmon I',
                description:'Simply seasoned with salt and pepper, these salmon fillets are pan seared with capers, and garnished with slices of lemon.',
                ingridients:[
                        '4 (6 ounce) fillets salmon',
                        '2 tablespoons olive oil',
                        '2 tablespoons capers',
                        '1/8 teaspoon salt',
                        '1/8 teaspoon ground black pepper',
                        '4 slices lemon'
                ],
                steps: [
                        'Preheat a large heavy skillet over medium heat for 3 minutes.',
                        'Coat salmon with olive oil. Place in skillet, and increase heat to high. Cook for 3 minutes. Sprinkle with capers, and salt and pepper. Turn salmon over, and cook for 5 minutes, or until browned. Salmon is done when it flakes easily with a fork.', 
                        'Transfer salmon to individual plates, and garnish with lemon slices.'
                ]
            });
            Recipe.create({
                name: 'Salmon with Dill',
                description: 'This is a simple recipe for salmon fillet or salmon steak. With just a hint of seasoning, you can bring out the delicious taste of the salmon. Serve with tartar sauce and lemon.',
                ingridients:[
                    '1 pound salmon fillets or steaks',
                    '1/4 teaspoon salt',
                    '1/2 teaspoon ground black pepper',
                    '1 teaspoon onion powder',
                    '1 teaspoon dried dill weed',
                    '2 tablespoons butter'
                ],
                steps:[
                    'Preheat oven to 400 degrees F (200 degrees C).',
                    'Rinse salmon, and arrange in a 9x13 inch baking dish. Sprinkle salt, pepper, onion powder, and dill over the fish. Place pieces of butter evenly over the fish.',
                    'Bake in preheated oven for 20 to 25 minutes. Salmon is done when it flakes easily with a fork.'
                ]
            })
        }
    })
}

exports.createDefaultRecipes = createDefaultRecipes;