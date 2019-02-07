export const FETCH_ACCESS_TOKEN = 'FETCH_ACCESS_TOKEN';
export const SAVE_ACCESS_TOKEN = 'SAVE_ACCESS_TOKEN';
export const SAVE_SPOTIFY_CODE_ACTION = 'SAVE_SPOTIFY_CODE';

export const saveSpotifyCode = (code) => (
  {
    type: SAVE_SPOTIFY_CODE_ACTION,
    payload: code
  }
);

export const fetchAccessToken = (code) => (
  {
    type: FETCH_ACCESS_TOKEN,
    payload: code
  }
);

export const saveAccessTokens = (tokens) => (
  {
    type: SAVE_ACCESS_TOKEN,
    payload: tokens
  }
);
