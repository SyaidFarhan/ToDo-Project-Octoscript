const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoPostSchema = new Schema({ 
    postTitle: { type: String, required: true }, 
    brand: { type: String, required: true }, 
    platform: { type: [String], required: true }, 
    dueDate: { type: Date, required: true }, 
    payment: { type: Number, default: 0 }, 
    status: { 
        type: String, 
        enum: ["Pending", "Scheduled", "Posted", "Cancelled"], 
        default: "Pending" 
    }, 
    content: { type: String }, 
    mediaUrls: { type: [String] }, 
    hashtags: { type: [String] },  
    assignedTo: { type: String }, 
    createdAt: { type: Date, default: Date.now }  
});

module.exports = mongoose.model("todoPost", todoPostSchema); 