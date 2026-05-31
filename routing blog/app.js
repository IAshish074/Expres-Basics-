// const data = new Date().getFullYear()
// console.log(data)
const express = require("express")
const app = express()

const PORT = 3000

app.get("/blog/:year/:month/:slug",(req,res)=>{
    const {year,month,slug} = req.params

    res.send(`
        <h1>Blog Details</h1>
        <p>Year: ${year}</p>
        <p>Month: ${month}</p>
        <p>Slug: ${slug}</p>
    `)
})

app.listen(PORT,()=>{
    console.log("http://localhost:3000")
})