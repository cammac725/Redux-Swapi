import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const getCharacters = () => dispatch => {
  dispatch({ type: FETCH_START });

  axios.get('https://swapi.co/api/people/')
    .then(res => {
      console.log('then', res)
      return dispatch({
        type: FETCH_SUCCESS,
        payload: res.data
      })
    })

    .catch(err =>
      dispatch({
        type: FETCH_FAIL,
        payload: "Error! Could not get data from the API."
      }))
}

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
