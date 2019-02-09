export const getFetchTopArtistRequest = (timeRange) => {
  console.log('timeRange: ', timeRange);
  return fetch('/api/top/artists?time_range='+(timeRange? timeRange : 'short_term')).then(res => res.json());
}
