import mongoose from "mongoose"

// Schema: mongoose allows us to use uniformity between documents, so we create our norms kadfñaljk
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }
})

// Transform schema into model
const PostMessage = mongoose.model("PostMessage", postSchema)

export default PostMessage