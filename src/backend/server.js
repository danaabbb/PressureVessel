// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Calculation = require('./models/Calculation');
const app = express();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(cors());
app.use(bodyParser.json());
// MongoDB connection
mongoose.connect('mongodb://localhost:27017/calculations', {
 useNewUrlParser: true,
 useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
 console.log('Connected to MongoDB');
});
// Routes
app.post('/api/calculations', async (req, res) => {
 const newCalculation = new Calculation(req.body);
 try {
   const savedCalculation = await newCalculation.save();
   res.status(201).json(savedCalculation);
 } catch (error) {
   res.status(400).json({ message: error.message });
 }
});
app.get('/api/calculations', async (req, res) => {
 try {
   const calculations = await Calculation.find();
   res.status(200).json(calculations);
 } catch (error) {
   res.status(400).json({ message: error.message });
 }
});
app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});