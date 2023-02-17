const router = require('express').Router()

const places = require('../models/places.js')


router.get('/new', (req, res) => {
  res.render('places/new')
})

//show route
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id], id })
  }
})


// index
router.get('/', (req, res) => {
res.render('places/index', {places});    
})


//POST/ places
router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})

//DELETE
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error 404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})


module.exports = router


