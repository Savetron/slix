const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/generate-slides', async (req, res) => {
  const { topic } = req.body;
  if (!topic) {
    return res.status(400).json({ error: 'Topic is required' });
  }

  const prompt = `"${topic}" başlığı için, Slidev markdown formatında, her slayt arasında '---' olacak şekilde, kısa ve bilgilendirici slaytlar üret. İlk slaytta başlık ve kısa açıklama olsun.`;

  try {
    const aiResponse = await axios.post(
      'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=' + process.env.GEMINI_API_KEY,
      {
        contents: [
          {
            parts: [
              { text: prompt }
            ]
          }
        ]
      }
    );

    const markdown = aiResponse.data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    res.json({ markdown });
  } catch (error) {
    console.error("AI API error:", error);
    res.status(500).json({ error: 'AI API error', details: error.message });
  }
});

app.listen(3001, () => {
  console.log('API server running on http://localhost:3001');
}); 