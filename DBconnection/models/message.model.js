import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    message: String,
})

export const messageModel = mongoose.model('Message', schema)