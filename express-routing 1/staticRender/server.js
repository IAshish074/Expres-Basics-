const express = require("express")
const path = require("path")
const app = express()

app.use(express.static(path.join(__dirname,"pages")))
const PORT = 3000

app.get("/service",(req,res)=>{
    res.sendFile(path.join(__dirname,"pages","service.html"))
})

app.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname,"pages","contact.html"))
})

app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"pages","about.html"))
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})