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
      res.render('places/edit', { place })
    })
    .catch((err )=> {
      res.render("Error")
    })
})

//POST
router.post('/', (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect('/places')
    })
    .catch(err => {
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
router.post('/:id/comment', async (req, res) => {
  let body = req.body
  if (body.auther === "") {
    body.auther = undefined;
  }
  req.body.rant = req.body.rant ? true : false
  try{ 
    let place = await db.Place.findById(req.params.id)
      try { 
        let comment = await db.Comment.create(body)
        place.Comments.push(comment.id)
        await place.save()
        res.status(302).redirect(`/places/${req.params.id}`)
        }
        catch(err) {
          res.status(404).render("error404")
        }
    
  } catch(err) {
      res.status(404).render("error404")
    }
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


  module.exports = router



