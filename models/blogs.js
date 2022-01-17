import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
    authorId: {
        type: String,
        required: 'Author id is required'
    },
    title: {
        type: String,
        required: 'Title is required'
    },
    subTitle: {
        type: String,
        required: 'Sub title is required'
    },
    blogPost: {
        type: String,
        required: 'Blog post is required'
    },

})

export default mongoose.model('Blogs', blogSchema)