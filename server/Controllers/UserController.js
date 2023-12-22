import UserModel from "../Models/userModel.js";
import bcrypt from 'bcrypt'


// get user from database

export const getUser = async (req, res) => {
    const id = req.params.id
    try {
        const user = await UserModel.findById(id)
        if (user) {
            const { password, ...otherDetails } = user._doc  // removed password
            res.status(200).json(otherDetails)
        } else {
            res.status(404).json("No such user exists")
        }
    } catch (error) {
        res.status(500).json(error)
    }

}

//update user 

export const updateUser = async (req, res) => {
    const id = req.params.id
    const { currentUserId, currentUserAdminStatus, password } = req.body

    if (id === currentUserId || currentUserAdminStatus) {
        try {
            if (password) {
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(password, salt)
            }
            const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("Access denied u can only update your profile")
    }
}

// delete user

export const deleteUser = async (req, res) => {
    const id = req.params.id
    const { currentUserId, currentUserAdminStatus } = req.body

    if (id == currentUserId || currentUserAdminStatus) {
        try {
            await UserModel.findByIdAndDelete(id)
            res.status(200).json("user deleted succesfully")
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("u can only delete your own profile")
    }
}

// follow a user 

export const followUser = async (req, res) => {
    const id = req.params.id

    const { currentUserId } = req.body

    if (currentUserId === id) {
        res.status(403).json("Action forbidden")
    } else {
        try {
            const followUser = await UserModel.findById(id);
            const followingUser = await UserModel.findById(currentUserId);

            if (!followUser.followers.includes(currentUserId)) {
                await followUser.updateOne({ $push: { followers: currentUserId } })
                await followingUser.updateOne({ $push: { following: id } })
                console.log('followUser', followingUser)
                res.status(200).json("user followed")
            } else {
                res.status(403).json("user is Already followed by u")
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

// unfollow a user 

export const UnFollowUser = async (req, res) => {
    const id = req.params.id

    const { currentUserId } = req.body

    if (currentUserId === id) {
        res.status(403).json("Action forbidden")
    } else {
        try {
            const followUser = await UserModel.findById(id);
            const followingUser = await UserModel.findById(currentUserId);

            if (followUser.followers.includes(currentUserId)) {
                await followUser.updateOne({ $pull: { followers: currentUserId } })
                await followingUser.updateOne({ $pull: { following: id } })
                console.log('followUser', followingUser)
                res.status(200).json("user unFollowed")
            } else {
                res.status(403).json("user is not followed by u")
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
}