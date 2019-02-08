const axios = require('axios');
const express = require('express');
const path = require('path');
const qs = require('qs');

const port = process.env.PORT || 8888;

const scope = 'user-top-read';
const client_id = '982f3121f1964b189015394089cfe66b'; // Your client id
const client_secret = '08b4ec7f25a2465aab9b0f3e4133a18e'; // Your secret
const redirect_uri = 'http://ziggoto.com:'+port+'/callback'; // Your redirect uri


const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/login', function(req, res) {
  res.redirect('https://accounts.spotify.com/authorize?' +
    qs.stringify({
      response_type: 'code',
      client_id,
      scope,
      redirect_uri
    }));
});

app.get('/callback', function(req, res) {
  const code = req.query.code || null;
  const payload = {
    code,
    redirect_uri,
    grant_type: 'authorization_code'
  };
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    }
  };

  axios.post('https://accounts.spotify.com/api/token', qs.stringify(payload), config)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.error(err);
    });
});

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port);

console.log('App is listening on port ' + port);
