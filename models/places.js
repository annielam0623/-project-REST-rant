//Require mongoose
const mongoose = require('mongoose')

//Create shorthand for the Schema constructor
const {Schema} = mongoose

const placeSchema = new mongoose.Schema({
  name: {type: String, required: true},
  pic: String,
  cuisines: {type: String, required: true},
  city: {type:String, default: 'Anytown'},
  state: {type: String, default: 'USA'},
  founded: Number
})


module.exports = mongoose.model('Place', placeSchema)



// module.exports = [

// {
//         name: 'H-Thai-ML',
//         city: 'Seattle',
//         state: 'WA',
//         cuisines: 'Thai, Pan-Asian',
//         pic: '/images/tea-01.jpeg'
//       }, {
//         name: 'Coding Cat Cafe',
//         city: 'Phoenix',
//         state: 'AZ',
//         cuisines: 'Coffee, Bakery',
//         pic: '/images/coffee-01.jpeg'
//       }]
       

