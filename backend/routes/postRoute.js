import express from 'express'
import { createPost, getPosts, updatePosts } from '../controllers/postController.js'
import authUser from '../middleware/authUser.js'

const postRouter = express.Router()

postRouter.post('/create-post', authUser, createPost)
postRouter.get('/allposts', getPosts)
postRouter.patch('/update-post/:id', authUser, updatePosts)

export default postRouter

