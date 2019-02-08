export const getFetchTopArtistRequest = () => {
  return fetch('/api/top/artists').then(res => res.json());
}
