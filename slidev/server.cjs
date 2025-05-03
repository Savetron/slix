const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const fs = require('fs');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/generate-slides', async (req, res) => {
  const { topic } = req.body;
  if (!topic) {
    return res.status(400).json({ error: 'Topic is required' });
  }

  const prompt = `"${topic}" başlığı için, Slidev markdown formatında, her slayt arasında '---' olacak şekilde, başlık, alt başlık, madde işaretli liste, görsel (image: ...), kod bloğu ve farklı layout'lar (özellikle ilk slaytta layout: cover) kullanarak zengin ve görsel olarak çekici slaytlar üret. Her slaytta uygun layout'u belirt. İlk slaytta 'layout: cover' kullan.`;

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

app.post('/api/save-markdown', async (req, res) => {
  const { markdown } = req.body;
  if (!markdown) {
    return res.status(400).json({ error: 'Markdown is required' });
  }
  try {
    fs.writeFileSync(__dirname + '/slides.md', markdown, 'utf8');
    res.json({ success: true });
  } catch (error) {
    console.error('Markdown dosyaya yazılamadı:', error);
    res.status(500).json({ error: 'Markdown dosyaya yazılamadı', details: error.message });
  }
});

app.listen(3001, () => {
  console.log('API server running on http://localhost:3001');
}); 