const React = require('react')
const Def = require('../default')

function comment_form () {
    return (
        <Def>
            <main>
                <h1>Add a New Comment</h1>
                <form method ="POST" action="/places/:id/">
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
                        <input className="form-control" type="checkbox" id="rant" name="rant" required />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Comment" />
                </form>
            </main>
        </Def>
    )
}

module.exports = comment_form