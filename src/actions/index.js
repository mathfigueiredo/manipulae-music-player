import deezer from '../api/deezer';

export const fetchPopular = () => {
  return async (dispatch) => {
    const response = await deezer.get('/playlist/948759923');
    console.log(response.data);

    dispatch({ type: 'FETCH_POPULAR', payload: response.data });
  };
};

export const fetchSearchResults = (e) => {
  return async (dispatch) => {
    const response = await deezer.get('/search', { params: { q: e.target.value } });
    console.log(response.data);

    dispatch({ type: 'FETCH_SEARCH', payload: response.data });
  };
};
