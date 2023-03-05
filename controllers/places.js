const router = require('express').Router()
const db = require('../models')
const places = require('../models/places.js')


//NEW
router.get('/new', (req, res) => {
  res.render('places/new')
})

//EDIT
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
    .then(place => {
      console.log(req.params.id)
      res.render('places/edit', { place })
    })
    .catch((err) => {
      console.log('err', err)
      res.render("Error")
    })
})

//POST
router.post('/', (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect('/places')
    })
    .catch((err) => {
      if (err && err.name == 'ValidationError') {
        let message = 'Validation Error: '
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `
          message += `${err.errors[field].message}`
        }
        res.render('places/new', { message })
      }
      else {
        res.render('error')
      }
    })
})

//POST - Comment
router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  req.body.rant = req.body.rant ? true : false
  db.Place.findById(req.params.id)
    .then((place) => {
      db.Comment.create(req.body)
        .then((comment) => {
          place.comments.push(comment.id)
          place.save()
            res.redirect(`/places/${req.params.id}`)
        })
        .catch((err) => {
          res.render("error404")
        })
    })
    .catch((err) => {
      res.render("error404")
    })
  })


  //INDEX
  router.get('/', (req, res) => {
    db.Place.find()
      .then((places) => {
        res.render('places/index', { places })
      })
      .catch((err) => {
        console.log(err);
        res.render("Error")
      })
  })

  //SHOW
  router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
      .populate('comments')
      .then(place => {
        console.log(place.comments)
        res.render('places/show', { place })
      })
      .catch((err) => {
        console.log(err);
        res.render("Error")
      })
  })

  //PUT
  router.put('/:id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body)
      .then((updatedPlace) => {
        res.redirect(`/places/${req.params.id}`)
      })
      .catch((err) => {
        console.log(err)
        res.render("Error")
      })
  })

  //DELETE
  router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
      .then(place => {
        res.redirect('/places')
      })
      .catch((err) => {
        console.log('err', err)
        res.render("Error")
      })
  })

  //DELETE COMMENT

  router.delete('/:id/comment/:rantId', (req, res) =>{
    db.Pla
  })

  module.exports = router



