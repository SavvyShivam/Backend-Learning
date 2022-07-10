
// Node Js

// Not a programming language.
// Not a framework or a library
// It is a javascript runtime,built on top of chrome's V8 engine.


// Internal Woking of a browser.

// JS--Browser--V8 Engine- Machine Code.

// Advantages of NodeJs.

// JS for Front-End as well as Back-End
// Flexibility
// Scalable



// function displayMessage(message) {
//     console.log('This is the msg: '+ message)
    
// }

// displayMessage('You are awesome')



// Global object
// console.log(global)

// setTimeout(function(){console.log('hey there')},5000)


// Modules and require 

// let myFunctions = require('./myfunctions')
// myFunctions.calculateCube(5)
// myFunctions.calculateSquare(5)


// destructering
// let {calculateCube,calculateSquare} = require('./myfunctions')
// calculateCube(5)
// calculateSquare(5)


// const fs = require('fs')
// let fileContent=fs.readFileSync('demo.txt','utf-8')
// console.log(fileContent)

// Converted in ES6
// import { readFileSync } from 'fs'
// let fileContent=readFileSync('demo.txt','utf-8')
// console.log(fileContent)

// const fs = require('fs')
// fs.writeFileSync('demo.txt','this is written by write file sys')


// Read and Write asysnchro
// const { error } = require('console')
// const fs = require('fs')

// fs.readFile('demo.txt','utf-8',(error,data)=>{
//     console.log(data)
// })

// console.log('This was excute after readfile')


// fs.readFile('demo.txt','written here by readFile',(error,data)=>{
//     console.log(data)
// })



// Creating and removing directories
// const fs = require('fs')

// make directory asyncro
// fs.mkdirSync('demo') 

// remove directory syncro
// fs.rmdirSync('demo')

// fs.mkdir('demo',()=>{console.log('directory is created')})

// fs.rmdir('demo',()=>{console.log('directory is deleted')})



// How a server works

// request - a server always listens for a uncoming requests from client. Server listens for requests on a specific port number. 

// Response - A server depending on the request, returns back an appropriate response 

// Creating a server 

// const { Console } = require('console')
// let http = require('http')

// let server= http.createServer((req,res)=>{
//     console.log(req.method)
// })

// server.listen(3000,'127.0.0.1')
// console.log('Server has started')


// Sending Response from a server

// let http = require('http')

// let server = http.createServer((req,res)=>{
//     res.setHeader('Content-type','text-html')
//     res.write('<h1>Hello-world</h1>')
//     res.end()
// })

// server.listen(3000,'127.0.0.1')
// console.log('Server has started')



// Read Stream and Write stream

// let fs = require('fs')

// let readStream = fs.createReadStream(__dirname+'/demo.txt')
// let writeStream = fs.createWriteStream(__dirname+'/sample.txt')

// let chunk_counter = 0

// readStream.on('data',(chunk)=>{
//     console.log(chunk.toString())
//     writeStream.write(chunk)
//     chunk_counter++
//     console.log('Number of Chunks being read and written are: '+chunk_counter)
// })




// Serving HTML files

// let http = require('http')
// let fs = require('fs')

// let server = http.createServer((req,res)=>{
//     res.setHeader('Content-type','text-html')
//     // let readStream = fs.createReadStream(__dirname+'/index.html')
//     // readStream.pipe(res)
//     fs.readFile('./index.html',(err,data)=>{
//         res.write(data)
//         res.end()
//     })
// })

// server.listen(3000,'127.0.0.1')
// console.log('Server has started')


// Serving JSON Data - return data from json response

// let http = require('http')
// let fs = require('fs')

// let server = http.createServer((req,res)=>{
//     res.setHeader('Content-type','application/json')
//     let student = {
//         name:'John',
//         address:'New York',
//         marks:200
//     }
//     res.write(JSON.stringify(student))
//     res.end()
// })

// server.listen(3000,'127.0.0.1')
// console.log('Server has started')


// Routing - Route the server depending upon address provided .

let http = require('http')
let fs = require('fs')

let server = http.createServer((req,res)=>{
    if(req.url === '/home'){
        res.setHeader('Content-type','text/html')
        fs.readFile('./index.html',(err,data)=>{
            res.write(data)
            res.end()
        })
    } else if(req.url === '/profile'){
        res.setHeader('Content-type','text/html')
        fs.readFile('./profile.html',(err,data)=>{
            res.write(data)
            res.end()
        })
    }
    else {
        res.setHeader('Content-type','text/html')
        fs.readFile('./404.html',(err,data)=>{
            res.write(data)
            res.end()
        })
    }
    
    
})

server.listen(3000,'127.0.0.1')
console.log('Server has started')











