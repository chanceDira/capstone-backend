import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
    authorId: {
        type: String,
        required: 'Author id is required',
        unique: true
    },
    blogImage: {
        type: String,
        required: 'Blog Image is required',
        unique: true
    },
    title: {
        type: String,
        required: 'Title is required',
        unique: true
    },
    subTitle: {
        type: String,
        required: 'Sub title is required',
        unique: true
    },
    blogPost: {
        type: String,
        required: 'Blog post is required',
        unique: true
    },

})

export default mongoose.model('Blogs', blogSchema)