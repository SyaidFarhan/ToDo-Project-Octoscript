const mongoose = require("mongoose");
const todoPost = require("./models/todo"); // Adjust the path if necessary

// Replace with your MongoDB connection string
const MONGO_URI = "mongodb://127.0.0.1:27017/todolist";

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

const seedData = [
  {
    postTitle: "New Product Launch",
    brand: "Brand A",
    platform: ["Instagram", "Twitter"],
    dueDate: new Date("2025-03-01"),
    payment: 100,
    status: "Scheduled",
    content: "Excited to announce our new product! 🚀 #Innovation",
    mediaUrls: ["https://example.com/image1.jpg"],
    hashtags: ["#NewLaunch", "#Tech"],
    assignedTo: "Marketing Team",
  },
  {
    postTitle: "Giveaway Announcement",
    brand: "Brand B",
    platform: ["Facebook"],
    dueDate: new Date("2025-03-05"),
    payment: 50,
    status: "Pending",
    content: "🎁 Giveaway alert! Follow & tag 3 friends to enter. #Giveaway",
    mediaUrls: ["https://example.com/image2.jpg"],
    hashtags: ["#Contest", "#Win"],
    assignedTo: "Social Media Manager",
  }
];

const seedDatabase = async () => {
  try {
    await todoPost.deleteMany(); // Clear existing data
    await todoPost.insertMany(seedData);
    console.log("Database Seeded Successfully!");
  } catch (error) {
    console.error("Error Seeding Database:", error);
  } finally {
    mongoose.connection.close(); // Close DB connection
  }
};

seedDatabase();
