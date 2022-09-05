const express = require('express')
const app = express();

// routing using application object
app.get('/',(req, res)=>{
    res.send("Welcome")
})
app.get('/about',(req, res)=>{
    res.send("About Page")
})

app.listen(3000,()=>{
    console.log("express tutorial")
})
