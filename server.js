const express = require('express');

const app = express();

app.get('/git-demo', (req, res) => {
  res.status(200).json({ message: 'git demo' });
});

app.listen(3000, () => {
  console.log('App is running');
});
