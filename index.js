const express= require("express")
const cors= require("cors")
const mongoose = require("mongoose")
const path = require("path")
const { app, httpServer } = require("./socket/Socket")
require("dotenv").config()

app.use(express.json())
app.use(express.static("dist"))
app.use(cors({ origin : true, credentials : true }))

app.use("/api/blog",require("./routes/blog.routes"))

app.use("*",(req,res)=>{
    res.sendFile(path.join(__dirname), "dist", "index.html")
})

app.use((err,req,res,next)=>{
    console.log(err);
    res.status(500).json({message:"SERVER ERROR",error:err.message})
})
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open",()=>{
    console.log("MONGO CONNECTED");
    httpServer.listen(process.env.PORT,console.log("SERVER RUNNING 🏃‍♂️")
    )})

