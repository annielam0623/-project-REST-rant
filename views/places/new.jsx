const React = require('react')
const Def = require('../default')

function new_form({ place}) {
    return (
        <Def>
            <mian>
                <h1>Add a New Place</h1>
              
                <form method="POST" action="/places">
                    <div className="form-group col-sm-6 text-center">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" id="name" name="name" required />
                    </div>
                    <div className="form-group col-sm-6 text-center">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" id="pic" name="pic" />
                    </div>
                    <div className="form-group col-sm-4 text-center">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" />
                    </div>
                    <div className="form-group col-sm-4 text-center">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state" />
                    </div>
                    <div className="form-group col-sm-4 text-center">
                        <label htmlFor="founded">Founded Year</label>
                        <input 
                            type="number"
                            className="form-control" 
                            id="founded" 
                            name="founded"
                            value={new Date().getFullYear()} />
                    </div>
                    <div className="form-group col-sm-12 text-center">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" required />
                    </div>
                    </form>
                    <input className="btn btn-primary" type="submit" value="Add Place" />
            
            </mian>
        </Def>
    )
}

module.exports = new_form
