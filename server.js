// ❌ Buni emas:
// const express = require('express');

// ✅ ES Module bilan shunday yoz:
import express from 'express';
import fs from 'fs';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());

const names = JSON.parse(fs.readFileSync('./ismlar_10k.json', 'utf-8'));

app.get('/api/names', (req, res) => {
  const { search, gender } = req.query;
  let filtered = names;

  if (search) {
    filtered = filtered.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (gender) {
    filtered = filtered.filter(item =>
      item.gender === gender.toLowerCase()
    );
  }

  res.json(filtered);
});

app.listen(PORT, () => {
  console.log(`✅ API ishlayapti: http://localhost:${PORT}/api/names`);
});
