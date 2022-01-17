import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: 'Full Name is required'
    },
    email: {
        type: String,
        required: 'Email is required'
    },
    comment: {
        type: String,
        required: 'Comment is required'
    }

})

export default mongoose.model('comments', commentSchema)