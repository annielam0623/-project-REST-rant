const router = require('express').Router()

// GET / places
router.get('/', (req, res) => {
   
        let places = [{
            name: 'H-Thai-ML',
            city: 'Seattle',
            state: 'WA',
            cuisines: 'Thai, Pan-Asian',
            pic: '/images/tea-01.jpeg'
          }, {
            name: 'Coding Cat Cafe',
            city: 'Phoenix',
            state: 'AZ',
            cuisines: 'Coffee, Bakery',
            pic: '/images/coffee-01.jpeg'
          }]
           
    res.render('places/index', {places});    
})

module.exports = router


