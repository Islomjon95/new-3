const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const path = require("path")
const mongoose = require("mongoose")
const port = 3000


mongoose.connect("mongodb+srv://islomjon:islomjon95@cluster0.beytn.mongodb.net/test")
const db = mongoose.connection
db.on("open" , ()=>{
    console.log("mongodb running");
})
db.on("error" , (err)=>{
    console.log(err);
})

app.set("view engine" , "pug")
app.use(express.static(path.join(__dirname , "public")))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(rIndex)

app.listen(port, ()=>{
    console.log("Server running");
})
