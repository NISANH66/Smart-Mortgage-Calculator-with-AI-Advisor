// .env file (save this as .env in your server root directory)
OPENAI_API_KEY = sk - proj - XXXXXXXXXXXXXXXXXXXXXXXXXXXX

// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

app.post('/api/chat', async (req, res) => {
    const { message } = req.body;

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: message }]
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${OPENAI_API_KEY}`
                }
            }
        );

        res.json(response.data);
    } catch (error) {
        console.error('Error from OpenAI:', error.message);
        res.status(500).json({ error: 'Something went wrong.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});