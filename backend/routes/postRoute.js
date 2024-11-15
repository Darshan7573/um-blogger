import express from 'express'
import { createPost } from '../controllers/postController.js'
import authUser from '../middleware/authUser.js'

const postRouter = express.Router()

postRouter.post('/create-post', authUser, createPost)

export default postRouter

