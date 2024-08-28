const router= require("express").Router()
const blogController= require("./../controller/blog.controller")

router
.get("/fetch",blogController.fetchBlog)
.post("/create-blog",blogController.createBlog)
.put("/update-blog/:id",blogController.updateBlog)
.delete("/delete-blog/:id",blogController.deleteBlog)

module.exports = router
