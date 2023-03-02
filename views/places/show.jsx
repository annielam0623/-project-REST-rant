const React = require('react')
const Default = require('../default')

function show({ place }) {
    return (
        <Default>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={place.pic} alt={place.name} />
                        <h3>
                            Located in {place.city}, {place.state}
                        </h3>
                    </div>
                    <div className="col-sm-6">
                        <h1>{place.name}</h1>
                        <br></br>
                        <h2>rating</h2>
                           currently unrated...
                        <br></br>
                        <div className="description">
                            <h3>Description</h3>
                            <h3>
                                {place.showEstablished()}
                            </h3>
                            <h4>
                                Serving {place.cuisines}
                            </h4>
                        </div>
                        <a href={`/places/${place._id}/edit`} className="btn btn-warning">
                            Edit
                        </a>
                        <form method="POST" action={`/places/${place._id}?_method=DELETE`}>
                            <button type="submit" className="btn btn-danger">
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </Default>
    )
}

module.exports = show