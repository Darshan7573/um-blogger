import express from 'express'
import { createPost, getPosts } from '../controllers/postController.js'
import authUser from '../middleware/authUser.js'

const postRouter = express.Router()

postRouter.post('/create-post', authUser, createPost)
postRouter.get('/allposts', getPosts)

export default postRouter

