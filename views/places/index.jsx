const React = require('react')
const Default = require('../default')

function index({ places }) {
  let placesFormatted = places.map((place) => {
    return (
      <div className="col-sm-6">
        <h2>
          <a href={`/places/${ place._id }`}>
            {place.name}
          </a>
        </h2>
        <p className="text-left">
          {place.cuisines}
        </p>
        <p className="text-left">
          Founded Year: {place.founded}
        </p>
        <img src={place.pic} alt={place.name} width="500" height="400"  />
        <p className="text-left">
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })

  return (
    <Default>
      <main>
        <h1>Places to Rant or Rave About</h1>
        <div className="row">
          {placesFormatted}
        </div>
      </main>
    </Default>
  )
}

module.exports = index
