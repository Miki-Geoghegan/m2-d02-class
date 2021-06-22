/**
 * TOC for Express Intro code along
 * 
 * 1. mpm init -> initialize your node environment and packager
 * 2. npm install express
 
 


 *7. Prepare the .html ang .img resourses
 * 8. Route the files
 */

//3. Import the newly installed express module (library)
const express = require('express') // 'requre' built in function for node, telling application we want to use (import) the library in node_modules

//4. Setup the express.app()
const app = express() 

//5. Tell express.app() what it needs to respond to (set a URL route) - URL is the address on the envelop, the route is the URL plus the action you want to take on that URL

app.all('/', mainRouteHandler)


function mainRouteHandler(request, response) {
    // just inspect the http verb in the console
    console.log(request.method)
    // return some text to the user
    response.send(`<h1>Hey you send me a request ${request.method}</h1>`)
}

app.all('/hello', helloRouteHandler)

function helloRouteHandler(request, response) {
    response.send(`<h1>Hello from my first Express.js app!</h1>`)
}

// 6. Sart the express.app() so it "listens" to a port

app.listen(3000)

