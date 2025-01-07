const express = require('express');

//git clone https://github.com/vishnudeviravi/express-git-demo.git

const app = express();

app.get('/git-demo', (req, res) => {
  res.status(200).json({ message: 'git demo' });
});

app.get('/dev', (req, res) => {
  res.status(200).json({ message: 'created at dev branch' });
});

agg.get('/git-hub', (req, res) => {
  res.status(200).json({ message: 'hello github' });
});

app.listen(3000, () => {
  console.log('App is running');
});
