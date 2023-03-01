const React = require('react')

function Defualt (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="/css/style.css" />
                <link  rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
					integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
					crossOrigin="anonymous"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
            </head>
            <body>
                <nav>
                    <ul>
                        <li key="home">
                            <a href="/">Home</a>
                        </li>
                        <li key="place">
                            <a href="/places">Places</a>
                        </li>
                        <li key="add_place">
                            <a href="/places/new">Add Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Defualt