const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    completed: { 
        type: Boolean, 
        default: false },
    imageUrl: { 
        type: String 
    }, // URL of the uploaded image
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
},{collection:"full-cloud-task"});

module.exports = mongoose.model("Task", taskSchema);