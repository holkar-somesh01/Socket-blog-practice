const mongoose =require("mongoose")

const blogSchema=new mongoose.Schema({
    task:{ type : String, required:true },
    desc:{ type : String, required:true },
    priority:{ type : String, required:true },
    images:{ type : String, required:true },
    complete:{ type : Boolean, default:true },
})
module.exports =  mongoose.model("blog",blogSchema)