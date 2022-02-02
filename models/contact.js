import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: 'Full Name is required'
    },
    email: {
        type: String,
        required: 'Email is required',
        unique: true
    },
    message: {
        type: String,
        required: 'Message is required'
    }

})

export default mongoose.model('contacts', contactSchema)