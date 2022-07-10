const express = require("express"); // import express
// const bodyParser = require('body-parser')
const mustacheExpress = require("mustache-express");
const { urlencoded } = require("body-parser");
const mustache = mustacheExpress();
mustache.cache = null;

const app = express(); // created express app instance

app.engine("mustache", mustache);
app.set("view engine", "mustache");
// app.use(bodyParser,urlencoded({extended:true})) // deprecated

app.use(express.urlencoded({extended:true}))

// app.get("/", (req, res) => {
//   let profile = {
//     name: "John",
//     age: 30,
//     address: "NY",
//     friends: ["Stack", "Mike", "Hero", "bob"],
//   };
//   res.render('index',{profile:profile})
// });

app.get('/add',(req,res)=>{
    res.render('add-data')
})

app.post('/add',(req,res)=>{
    console.log(req.body)
    res.send('Form Submitted')
})

// app.set('view engine','ejs')

// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+'/index.html')
// })

// handling incoming request from server
// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+'/index.html')
// })

// app.get('/about',(req,res)=>{
//     res.sendFile(__dirname+'/about.html')
// })

// app.get('/username/:user_id',(req,res)=>{
//     res.send('This is a profile page for user: '+req.params.user_id)
// })

// app.get('/profile/:id',(req,res)=>{

//     let user = {
//         username:'John',
//         age:30,
//         address:'NY',
//         friends: ['Stack','Mike','Hero','bob']
//     }
//     res.render('userprofile',{'user_id':req.params.id,'user':user})
// })

app.listen(3000); // created app instance to listen to port no 3000
