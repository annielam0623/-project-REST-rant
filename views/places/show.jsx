const React = require('react')
const comment = require('../../models/comment')
const Default = require('../default')

function show ({ place }) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className='inactive'>
            Not rated yet!
        </h3>
    )
    if (place.comments.length) {
        comments = place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant!👿' : 'Rave!😻'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Default>
            <main>
                <div className="row">
                    <div className="col-md-6">
                        <img src={place.pic} alt={place.name} />
                        <h3>
                            Located in {place.city}, {place.state}
                        </h3>
                    </div>
                    <div className="col-md-6">
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
                <hr />
                <h2>Comments</h2>
                {comments}
                <div>
                    <form className="row justify-content-md-center" method="POST" action={`/places/${place._id}/comment`} >
                        <div className="form-group col-md-4 mt-2">
                            <label htmlFor="author">Name</label>
                            <input className="form-control" type="text" id="author" name="author" placeholder="Name Here" />
                        </div>
                        <div className="form-group col-md-4  mt-2r">
                            <label htmlFor="stars">Rating:</label>
                            <input className="form-control" type="range" step="0.5" min="1" max="5" id="stars" name="stars" required />
                        </div>
                        <div className="form-group col-md-4  mt-2r">
                            <label htmlFor="content">Is this a rant?</label>
                            <br />
                            <input
                                type="checkbox"
                                name="content"
                                id="content"
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="content">Comment:</label>
                            <textarea className="form-control"  id="content" type="text" name="content" placeholder="I love this place" />
                             <button className="btn btn-primary mt-2" type="submit">Add Comment</button>  
                        </div>                     
                    </form>
                </div>
            </main>
        </Default>
    )
}

module.exports = show


