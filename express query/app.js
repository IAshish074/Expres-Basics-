const express  = require("express")
const app = express()

const PORT = 3000

app.get("/greet",(req,res)=>{
    const message = req.query.lang
    if(message === "en"){
        res.send("Hello")
    }
    else if(message === "fr"){
        res.send("Bonjour")
    }
    else if(message === "hi") {
        res.send("Namastey")
    }
    else{
        res.send("jisko pasand na aaye apne gand me daal lo")
    }
})

app.listen(PORT,()=>{
    console.log("http://localhost:3000")
})