const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log('Tenthop proxy server listening on port ', PORT);
});

app.use(express.static('./client'));

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: './client/' });
});