import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';
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

const generateHeaders = dispatch => {
  return {
    headers: {
      Authorization: "Bearer " + getToken(dispatch)
    }
  };
};

const dispatchUser = async(dispatch, res, type) => {
  dispatch({ type, payload: {
      code: res.status,
      user: res.data
    }});
};

const dispatchError = async(dispatch, e) => {
  dispatch({ type: FETCH_USER, payload: {
      code: e.request.status,
      user: {}
    }});
};

export const fetchUser = () => async dispatch => {
  try {
    const res = await axios.get('/api/user', generateHeaders(dispatch));
    return dispatchUser(dispatch, res, FETCH_USER);
  } catch (e) {
    return dispatchError(dispatch, e);
  }
};

export const handleToken = token => async dispatch => {
  try {
    const res = await axios.post('/api/payment', token, generateHeaders(dispatch));
    return dispatchUser(dispatch, res, FETCH_USER);
  } catch (e) {
    return dispatchError(dispatch, e);
  }
};

export const submitSurvey = (values, history) => async dispatch => {
  try {
    const res = await axios.post('/api/survey', values, generateHeaders(dispatch));
    history.push('/surveys');
    return dispatchUser(dispatch, res, FETCH_USER);
  } catch (e) {
    return dispatchError(dispatch, e);
  }
};

export const fetchSurveys = () => async dispatch => {
  try {
    const res = await axios.get('/api/survey', generateHeaders(dispatch));
    dispatch({ type: FETCH_SURVEYS, payload: res.data });
  } catch (e) {
    dispatch({ type: FETCH_USER, payload: {
        code: e.request.status
      }});
  }
};
