const asyncHandler = require("express-async-handler")
const Blog = require("../models/Blog")

exports.fetchBlog= asyncHandler(async(req,res)=>{
 const result = await Blog.find()
    res.json({message:"Blog Fetch Success", result})
})

exports.createBlog = asyncHandler(async(req,res)=>{
    await Blog.create(req.body)
    res.json({message:"Blog Create Success"})
})


exports.updateBlog= asyncHandler(async(req,res)=>{
    await Blog.findByIdAndUpdate(req.params.id, req.body)
    res.json({message:"Blog Update Success"})
})
exports.deleteBlog= asyncHandler(async(req,res)=>{
    await Blog.findByIdAndDelete(req.params.id)
    res.json({message:"Blog Delete Success"})
})