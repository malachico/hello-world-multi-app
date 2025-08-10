const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/hello', (req, res) => {
  res.send('Hello from Node.js Express!');
});

app.listen(port, () => {
  console.log(`Node.js Express app listening at http://localhost:${port}`);
});
