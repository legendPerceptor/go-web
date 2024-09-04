// server.js
const express = require('express');
const cors = require('cors'); 
const axios = require('axios');
require('dotenv').config(); // Loads the .env file

const app = express();
const PORT = 5000;

const corsOptions = {
    origin: 'http://localhost:3000', // Allow requests from your React app
    optionsSuccessStatus: 200,       // Some legacy browsers choke on 204
  };
app.use(cors(corsOptions));

app.get('/translate', async (req, res) => {
  const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY; // API key stored securely in the backend
  const { text, targetLang } = req.query;
  console.log(`API_KEY = ${apiKey}`)
  try {
    const response = await axios.post(`https://translation.googleapis.com/language/translate/v2?key=${apiKey}`, {
      q: text,
      target: targetLang
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});