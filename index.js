const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  return res.json({ msg: 'Sucesso' });
});

app.get('/teste', (req, res) => {
  return res.json({ msg: 'Teste!' });
});

app.listen(3000);
