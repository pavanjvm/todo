require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('✅ MongoDB connected successfully');
    })
    .catch((error) => {
        console.error('❌ MongoDB connection error:', error);
    });

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});


const todo = mongoose.model('todocollection', todoSchema);

module.exports = {
    todo
};