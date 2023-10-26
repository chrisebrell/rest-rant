const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p className="errorMessage">Oops, sorry, we can't find this page!</p>
                <div className="errorDiv">
                <img className="errorCat" src="/images/404cat.jpg" alt="Picture of cat"/>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404