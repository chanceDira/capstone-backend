import mongoose from 'mongoose'

const signupSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: 'Full Name is required'
    },
    email: {
        type: String,
        required: 'Email is required',
        unique: true
    },
    password: {
        type: String,
        required: 'Message is required'
    }

})

export default mongoose.model('users', signupSchema)