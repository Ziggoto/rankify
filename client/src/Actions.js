import { getFetchTopArtistRequest } from './Fetch';

export const SET_TOP_ARTIST_ACTION = 'SET_TOP_ARTISTS';

const setTopArtists = (artists) => ({
  type: SET_TOP_ARTIST_ACTION,
  payload: artists
});

export const fetchTopArtists = () => dispatch => {
  dispatch({ type: 'FETCH_TOP_ARTIST_REQUESTED' });
  getFetchTopArtistRequest().then(response => {
    dispatch(setTopArtists(response.json())
    );
  })
};
