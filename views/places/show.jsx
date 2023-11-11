const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet! Stay tuned!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            Not yet rated
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings/data.place.comments.length) 
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
            stars += '⭐'
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!' }</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <div className ="row">
                    <div className="col-sm-6">
                <h1>{data.place.name}</h1>
                <img src={data.place.pic}/>
                <h3>
                    Located in {data.place.city}, {data.place.state}
                </h3>
                </div>
                <div className ="col-sm-6">
                <h2>Rating</h2>
                {rating}
                <h2>Description</h2>
                <h3>
                    {data.place.showEstablished()}
                </h3>
                <h4>
                    Serving {data.place.cuisines}
                </h4>
                <a href={`/places/${data.place.id}/edit`} className="btn btn-primary">
                    Edit
                </a>
                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
                </div>
                <footer>
                    <h2>Comments</h2>
                    {comments}
                <h1>Add a New Comment</h1>
                <form method ="POST" action={`/places/${data.place.id}/rant`}>
                    <div className ="form-group">
                        <label htmlFor="author">Author</label>
                        <input className="form-control" id="author" type="text" name="author" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <input className="form-control" type="text" id="content" name="content" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="stars">Stars</label>
                        <input className="form-control" type="number" id="stars" name="stars" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rant">Rant</label>
                        <input className="form-control-checkbox" type="checkbox" id="rant" name="rant" />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Comment" />
                </form>
                </footer>
                </div>
            </main>
        </Def>
    )
}

module.exports = show