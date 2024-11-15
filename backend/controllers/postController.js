import postModel from "../models/PostModel.js";

const createPost = async (req, res) => {
    try {
        const { title, content, tags } = req.body;

        const tagsArray = Array.isArray(tags) ? tags : [tags]

        if (!title || !content || !tags) {
            return res.json({ success: false, message: 'Missing Details' })
        }

        const postData = {
            title, content, tags: tagsArray, user: req.user.id
        }

        const post = new postModel(postData)
        await post.save()

        res.json({ success: true, message: "post Created" })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}


export { createPost }