
const express = require('express')
const mysql = require('mysql')
const app = express()

app.get('/students',(req,res)=>{
   const db =  mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'NewPassword',
    database:'expreessdb'

    })
    db.connect((err)=>{
        const sql = "SELECT * FROM student"

        db.query(sql,(err,rows,fields)=>{
            console.log(rows)
        })
    })

})

app.listen(3000)