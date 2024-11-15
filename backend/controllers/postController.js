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

const getPosts = async (req, res) => {
    try {
        const posts = await postModel.find().populate('user', 'username');
        res.json({ success: true, posts })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

const updatePosts = async (req, res) => {
    try {
        const post = await postModel.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            content: req.body.content,
            tags: req.body.tags
        }, { new: true })

        if (!post) {
            return res.json({ success: false, message: "Post not found" });
        }
        res.json({ success: true, message: 'Post Updated Successfully' })

    } catch (error) {
        res.json({ success: false, message: error.message })

    }
}

const deletePost = async (req, res) => {
    try {
        const post = await postModel.findByIdAndDelete(req.params.id)

        if (!post) {
            return res.json({ success: false, message: 'Post not found' })
        }

        res.json({ success: true, message: 'Post Deleted Successfully' })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }

}


export { createPost, getPosts, updatePosts, deletePost }