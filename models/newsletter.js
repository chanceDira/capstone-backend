import mongoose from 'mongoose'

const newsSchema = new mongoose.Schema({

    newsletter: {
        type: String,
        required: 'Email is required'
    }

})

export default mongoose.model('newsLetters', newsSchema)