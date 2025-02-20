const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
const todoPostRoutes = require('./routes/todoPostRoutes')
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const ExpressError = require('./utils/ExpressError');
dotenv.config();
connectDB();

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too many requests, please try again later.',
});
app.use(limiter);

app.use('/', todoPostRoutes)

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404));
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Oh No, Something Went Wrong!';
    res.status(statusCode).json({ success: false, statusCode, message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
