const React = require('react')

function Defualt (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Defualt