const React = require('react')
const Default = require('./layouts/default')

function Error404 () {
    return (
        <Default>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Ummm this is not a page</p>
            </main>
        </Default>
    )
}

module.exports = Error404