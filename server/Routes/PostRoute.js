import express from "express";
import { createNewPost, deletePost, getPost, getTimeLinePost, likePost, updatePost } from "../Controllers/PostControllers.js";

const router = express.Router()

router.post("/", createNewPost)

router.get("/:id", getPost)

router.put("/:id", updatePost)

router.delete("/:id", deletePost)

router.post("/:id/like", likePost)

router.get("/:id/timeline", getTimeLinePost)

export default router