// Modules and Globals

require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const mongoose =require('mongoose')
const MONGO_URI = process.env.MONGO_URI

const methodOverride = require('method-override')

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


//connect to mongo
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true, 
	useUnifiedTopology: true
    }, 
	() => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )
  

// Controllers & Routes
const controllers = require('./controllers/places.js')
app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
	res.render('home')
})

app.get('*', (req, res) => {
	res.render('error404')
});

//Listen for Connections
app.listen(process.env.PORT)

