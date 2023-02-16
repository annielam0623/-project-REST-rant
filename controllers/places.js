const router = require('express').Router()


router.get('/new', (req, res) => {
  res.render('places/new')
})

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

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id] })
  }
})



//POST/ places
router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})


module.exports = router


