import qs from 'qs';

import { clientId, clientSecret, redirectUri } from './Config';

const post = (url, payload) => fetch(url, {
  method: 'POST',
  mode: 'no-cors',
  headers: {
     'Content-Type': 'application/x-www-form-urlencoded'
   },
  body: qs.stringify(payload)
});

export const fetchAccessToken = (code) => {
  const payload = {
    grant_type: 'authorization_code',
    code,
    redirect_uri: redirectUri,
    client_id: clientId,
    client_secret: clientSecret
  };

  return post('/api/token', payload);
}
