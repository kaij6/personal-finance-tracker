const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/finance-tracker', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a transaction schema
const transactionSchema = new mongoose.Schema({
  date: String,
  type: String,
  category: String,
  amount: Number,
});

// Create a model
const Transaction = mongoose.model('Transaction', transactionSchema);

// Get all transactions
app.get('/api/transactions', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
});

// Add a new transaction
app.post('/api/transactions', async (req, res) => {
  const transaction = new Transaction(req.body);
  try {
    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ error: 'Failed to add transaction' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
