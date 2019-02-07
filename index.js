const express = require('express');
  const path = require('path');

const port = process.env.PORT || 8888;

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.post('/api/token', (req, res) => {
  console.log(req);
});

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port);

console.log('App is listening on port ' + port);
