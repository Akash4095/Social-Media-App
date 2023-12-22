import PostModel from "../Models/PostModel.js";
import UserModel from "../Models/userModel.js"
import mongoose from "mongoose";



// Create New Post

export const createNewPost = async (req, res) => {
    const newPost = new PostModel(req.body)
    try {
        await newPost.save()
        res.status(200).json("Post Created")
    } catch (error) {
        res.status(500).json(error)
    }
}

// Get Post 

export const getPost = async (req, res) => {
    const id = req.params.id
    try {
        const post = await PostModel.findById(id)
        res.status(200).json(post)

    } catch (error) {
        res.status(500).json(error)
    }
}

// update post 

export const updatePost = async (req, res) => {
    const postId = req.params.id
    const { userId } = req.body
    try {
        const post = await PostModel.findById(postId)
        if (post.userId === userId) {
            await post.updateOne({ $set: req.body })
            res.status(200).json("Post Updated")
        } else {
            res.status(403).json("U cannot update This post")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

// delete post

export const deletePost = async (req, res) => {
    const postId = req.params.id
    const { userId } = req.body

    try {
        const post = await PostModel.findById(postId)
        if (post.userId === userId) {
            await PostModel.deleteOne()
            res.status(200).json("Post deleted succesfully")
        } else {
            res.status(403).json("U cannot update This post")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

//like unlike post

export const likePost = async (req, res) => {
    const id = req.params.id
    const { userId } = req.body
    try {
        const post = await PostModel.findById(id)
        if (!post.likes.includes(userId)) {
            await post.updateOne({ $push: { likes: userId } })
            res.status(200).json("post liked")
        } else {
            await post.updateOne({ $pull: { likes: userId } })
            res.status(200).json("post un-liked")
        }

    } catch (error) {
        res.status(500).json(error)
    }
}

//get timeline post

export const getTimeLinePost = async (req, res) => {
    const userId = req.params.id
    try {
        const currentUserPosts = await PostModel.find({ userId: userId })
        const followingPosts = await UserModel.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(userId)
                }
            },
            {
                $lookup: {
                    from: "posts",
                    localField: "following",
                    foreignField: "userId",
                    as: "followingPosts"
                }
            },
            {
                $project: {
                    followingPosts: 1,
                    _id: 0
                }
            }
        ])
        res.status(200).json(currentUserPosts.concat(...followingPosts[0].followingPosts)
            .sort((a, b) => {
                return b.createdAt - a.createdAt
            })
        )
    } catch (error) {
        res.status(500).json(error)
    }
}