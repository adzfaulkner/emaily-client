import axios from 'axios';
import { FETCH_USER } from './types';
import Cookie from 'js-cookie';

const getToken = (dispatch) => {
  return handleEmptyToken(Cookie.get('jwt'), dispatch);
};

const handleEmptyToken = (token, dispatch) => {
  if (token === null) {
    dispatch({ type: FETCH_USER, payload: {
        code: null,
        user: {}
      }});
  }

  return token;
};

const doApiCall = async (callApi, dispatch) => {
  try {
    const res = await callApi({
      headers: {
        Authorization: "Bearer " + getToken(dispatch)
      }
    });

    dispatch({ type: FETCH_USER, payload: {
        code: res.status,
        user: res.data
      }});
  } catch (e) {
    dispatch({ type: FETCH_USER, payload: {
        code: e.request.status,
        user: {}
      }});
  }
};

export const fetchUser = () => async dispatch => {
  doApiCall(async (headers) => {
    return await axios.get('/api/user', headers);
  }, dispatch);
};

export const handleToken = token => async dispatch => {
  doApiCall(async (headers) => {
    return await axios.post('/api/payment', token, headers);
  }, dispatch);
};
