# ToDo-Project-Octoscript

## 📌 About
ToDo-Project-Octoscript is a **To-Do List Management System** designed for managing social media posts efficiently. The project provides a REST API with CRUD operations for handling scheduled posts, including metadata like platform, hashtags, media URLs, and payment status.

## 🚀 Features
- **Task Management:** Create, Read, Update, and Delete (CRUD) social media posts.
- **Swagger API Documentation:** Easily explore and test API endpoints.
- **Secure & Optimized:** Uses Helmet.js, CORS, Rate Limiting, and Logging.
- **MongoDB Integration:** Stores and manages post data efficiently.

## 📂 Project Setup
### 1️⃣ Install Dependencies
Run the following command to install all required dependencies:
```sh
npm install
```

### 2️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and add your MongoDB connection string:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 3️⃣ Start the Server
Run the following command to start the application:
```sh
npm start
```
By default, the server runs on `http://localhost:5000/`

## 📖 API Documentation
Swagger UI is available at:
🔗 **[http://localhost:5000/api-docs](http://localhost:5000/api-docs)**

This provides an interactive interface to test and explore API endpoints.

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Security:** Helmet.js, Rate Limiting, CORS
- **Logging:** Morgan
- **Validation:** Joi
- **Documentation:** Swagger

## 📜 API Endpoints Overview
| Method | Endpoint      | Description                |
|--------|-------------|----------------------------|
| GET    | /todos      | Get all To-Do posts       |
| POST   | /todos      | Create a new To-Do post   |
| PUT    | /todos/:id  | Update an existing post   |
| DELETE | /todos/:id  | Delete a post            |

For detailed API specifications, refer to **[Swagger Documentation](http://localhost:5000/api-docs)**.

## 🔧 Development & Contribution
1. Fork the repository
2. Create a feature branch (`git checkout -b feature-branch`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature-branch`)
5. Submit a Pull Request

## 📞 Contact
For any issues or suggestions, feel free to reach out!

---
🚀 **Happy Coding!** 🚀

