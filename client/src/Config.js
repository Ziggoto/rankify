import qs from 'qs';

export const scopes = 'user-top-read';
export const clientId = '982f3121f1964b189015394089cfe66b';
export const clientSecret = '08b4ec7f25a2465aab9b0f3e4133a18e';
export const redirectUri = 'http://ziggoto.com:3000/callback';

const authQueryStrings = () => qs.stringify({
  response_type: 'code',
  client_id: clientId,
  scope: scopes,
  redirect_uri: redirectUri
});

export const authUrl = `https://accounts.spotify.com/authorize?${authQueryStrings()}`;

// export const tokenUrl = 'https://accounts.spotify.com/api/token';
