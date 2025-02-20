const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
const todoPostRoutes = require('./routes/todoPostRoutes')
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const ExpressError = require('./utils/ExpressError');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

dotenv.config();
connectDB();

// Swagger configuration
const swaggerOptions = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'ToDo API',
        version: '1.0.0',
        description: 'API for managing ToDo posts',
        contact: { name: 'API Support' },
      },
      servers: [{ url: 'http://localhost:5000' }]
    },
    apis: ['./routes/*.js']
  };
  

const swaggerDocs = swaggerJsDoc(swaggerOptions);


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

// API Documentation Route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// API Routes
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
