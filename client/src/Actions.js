import { getFetchTopArtistRequest } from './Fetch';

export const SET_TOP_ARTIST_ACTION = 'SET_TOP_ARTISTS';
export const SET_TIME_RANGE_ACTION = 'SET_TIME_RANGE';

const setTopArtists = (artists) => ({
  type: SET_TOP_ARTIST_ACTION,
  payload: artists
});

const setTimeRange = (timeRange) => ({
  type: SET_TIME_RANGE_ACTION,
  payload: timeRange
})

export const fetchTopArtists = (timeRange) => dispatch => {
  dispatch({ type: 'FETCH_TOP_ARTIST_REQUESTED' });
  getFetchTopArtistRequest(timeRange).then(data => {
    dispatch(setTimeRange(timeRange));
    dispatch(setTopArtists(data.items));
  })
};
