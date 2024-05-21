const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/food', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const contactRouter = require('./routes/contactRouter');
const reviewsRouter = require('./routes/reviewsRouter');
const userRouter = require('./routes/userRoutes');
const planRoutes = require('./routes/planRoutes'); // Import planRoutes

// Middleware - Use CORS for all routes
app.use(cors());

// Parse incoming JSON data
app.use(express.json());

// Use the userRouter for '/signup' and '/login' routes
app.use('/signup', userRouter);
app.use('/', userRouter);

// Mount the contactRouter for '/api/contact' route
app.use('/api/contact', contactRouter);

// Use reviewsRouter
app.use('/api/reviews', reviewsRouter);

// Use the planRoutes
app.use("/api/plans", planRoutes);

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
