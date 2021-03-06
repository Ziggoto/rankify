const axios = require('axios');
const cors = require('cors');
const express = require('express');
const path = require('path');
const qs = require('qs');

require('dotenv').config()

const port = process.env.PORT || 8888;

const scope = process.env.SCOPE;
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URI;

// Just to save authorization variables
const params = {};

const app = express();

app
  .use(express.static(path.join(__dirname, 'client/build')))
  .use(cors());

app.get('/login', (req, res) => {
  res.redirect('https://accounts.spotify.com/authorize?' +
    qs.stringify({
      response_type: 'code',
      client_id,
      scope,
      redirect_uri
    }));
});

app.get('/callback', (req, res) => {
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
    .then(response => {
      // console.log(res);
      params.access_token = response.data.access_token;
      params.refresh_token = response.data.refresh_token;

      res.redirect('/profile');
    })
    .catch(err => {
      console.error(err);
    });
});

app.get('/api/top/artists', (req, res) => {
  const time_range = req.query.time_range || null;
  const target_url = 'https://api.spotify.com/v1/me/top/artists' + (time_range? '?time_range='+time_range : '');

  axios.get(target_url, {
    headers: {
      'Authorization': 'Bearer ' + params.access_token
    }
  })
    .then(response => {
      res.json(response.data);
    })
    .catch(err => {
      res.send(err);
    });
});

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port);

console.log('App is listening on port ' + port);
