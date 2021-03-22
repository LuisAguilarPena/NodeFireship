// const { EventEmitter } = require('events')

// const eventEmitter = new EventEmitter()

// eventEmitter.on('kamehame', () => {
//   console.log("HAAAA!");
// })

// eventEmitter.emit('kamehame')

//! Blocking & Non-blocking example
// const { readFile, readFileSync } = require(`fs`)

// const txt = readFileSync(`./hello.txt`, `utf8`) // blocking

// readFile(`./hello.txt`, `utf8`, (err, txt) => { // runs callback once the file has been read
//   console.log("the text non blocking", txt);
// })

// console.log("this is the txt -->", txt)

// console.log('Do this asap')


//! Non-blocking example with promises
const { readFile } = require('fs').promises // this gives a function that returns a promise when called

// // const file = await readFile('.hello.txt', 'utf8') // with node 14 you can use top level await

// async function hello() {
//   const file = await readFile('./hello.txt', 'utf8')
// }

//! Modules example

// const myModule = require('./module')

// console.log("-->", myModule);


// Fullstack web app example. Our server will live in a URL when a user makes a request to this URL in the browser our server will respond with some HTML

// We will first create an instance of an express app, this allows us to create different url's and endpoints that a user can navigate to in the browser and then we define code for the server to handle those requests. 
const express = require('express')

// console.log("-->", express)

const app = express()

// When a user navigates to a url in the browser its whats known as a GET requests wich means they are requesting some data on the server and not trying to modify or updating anything on the server.
// app.get('/', (request, response) => {
//   // Request - users incoming data
//   // Response - Your outgoing data

//   // Pass the html, using a callback, should use promises instead 
//   readFile('./home.html', 'utf8', (err, html) => {
//     if (err) {
//       response.status(500).send('sorry, out of order')
//     }

//     response.send(html)
//   })
// });

app.get('/', async (request, response) => {
  response.send(await readFile('./home.html', 'utf8'))
})

// start listening to incoming requests we do that by defining a port, wich will normally come from a node environment variable
app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))