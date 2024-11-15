import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    tags: [String],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
}, { timestamps: true })

const postModel = mongoose.models.post || mongoose.model('post', postSchema)

export default postModel