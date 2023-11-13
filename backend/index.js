const express = require('express');
const app = express();
const port = 4000; // サーバーポート

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/aho',(req,res) => {
  res.send('sine');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});