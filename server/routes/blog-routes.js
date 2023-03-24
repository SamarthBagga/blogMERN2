import express from "express";
const blogRouter = express.Router();
import {
  addBlog,
  getAllBlogs,
  updateBlog,
  getById,
  deleteBlog,
  getUserbyId,
} from "../controllers/blog-controller.js";

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getById);
blogRouter.delete("/:id", deleteBlog);
blogRouter.get("/user/:id", getUserbyId);

export default blogRouter;
