const express = require('express');
const app = express();
const PORT = process.env.port || 3000;

const server = app.listen(PORT, () => {
  console.log('Tenthop proxy server listening on port ', PORT);
});

app.use(express.static('./client'));