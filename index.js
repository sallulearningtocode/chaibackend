const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.get('/sendfile',(req,res)=>{

    res.send("Your File has been sent");
})
app.get('/sendmail',(req,res)=>{
    res.send('<h1>Enter Your Email address and receiver email address</h1>')
})
app.listen(process.env.port,()=>{
    console.log(`Example app listening on port ${port}`);
})

console.log("Chai aur code")