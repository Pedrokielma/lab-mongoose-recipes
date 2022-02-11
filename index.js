const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');

// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';



// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    // return Recipe.deleteMany()
  })
  // .then(() => {
  //   // Run your code here, after you have insured that the connection was made
  //   return Recipe.insertMany(data)
  // })
  // .then((newRecipe) => {
  //   newRecipe.forEach((newRecipe) => console.log(newRecipe.title))
  // })
  .then(() => {
    return Recipe.findByIdAndUpdate('62053bf79b1e8038b1447beb', { duration: 100 })
  })
  .then((previousValue) => {
    console.log(previousValue.duration)
  })
  .then(() => {
    
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

  let newRec = {
    "title": "Asian spagetti",
    "level": "Amateur Chef",
    "ingredients": [
      "1/2 cup rice vinegar",
      "5 tablespoons honey",
      "1/3 cup soy sauce (such as Silver Swan®)",
      "1/4 cup Asian (toasted) sesame oil",
      "3 tablespoons Asian chili garlic sauce",
      "3 tablespoons minced garlic",
      "salt to taste",
      "8 skinless, boneless chicken thighs"
    ],
    "cuisine": "Asian",
    "dishType": "main_course",
    "image": "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
    "duration": 40,
    "creator": "Chef lePeter"
  };




  // Recipe.create(newRec)
  //   .then((newRecipe) => console.log(newRecipe))
  //   .catch((err) => console.log(err));

  //   data.forEach(element => {
  //     Recipe.create(element)
  //   .then((newRecipe) => console.log(newRecipe))
  //   .catch((err) => console.log(err))
  //   });
    
  //   Recipe.findByIdAndUpdate('6205303eac28a2bdddb54460', { duration: 100 })
  //   .then((previousValue) => console.log(previousValue))
  // .catch((err) => console.log(err));

  // Recipe.findByIdAndDelete('6205303eac28a2bdddb5445f')
  // .then((deleted) => console.log(deleted))
  // .catch((err) => console.log(err));

