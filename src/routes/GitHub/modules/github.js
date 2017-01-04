import axios from 'axios';

// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC';

export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_ERROR = 'GET_USERS_ERROR';

// ------------------------------------
// Actions
// ------------------------------------
export function gitHubLogin () {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      dispatch({type: 'GET_USERS_START'});
      axios.get('http://rest.learncode.academy/api/wstern/users').then((response) => {
        dispatch({type: 'GET_USERS_SUCCESS', payload: response.data});
        resolve();
      }).catch((err) => {
        dispatch({type: 'GET_USERS_ERROR', payload: err});
        reject();
      })
    });
  };

  // return (dispatch, getState) => {
  //   dispatch({type: 'GET_USERS_START'});
  //   axios.get('http://rest.learncode.academy/api/wstern/users').then((response) => {
  //     dispatch({type: 'GET_USERS_SUCCESS', payload: response.data});
  //   }).catch((err) =>{
  //     dispatch({type: 'GET_USERS_ERROR', payload: err});
  //   })
  // }
}

export function loadCategories() {
  return {
    type: 'LOAD',
    payload: {
      request:{
        url:'/wstern/users'
      }
    }
  }
}

export const actions = {
  gitHubLogin,
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]    : (state, action) => state + action.payload,
  [GET_USERS_SUCCESS] : (state, action) => action.payload,
  [GET_USERS_ERROR] : (state, action) => action.payload,
  [COUNTER_DOUBLE_ASYNC] : (state, action) => state * 2
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0;
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  console.log(state);

  return handler ? handler(state, action) : state;
}
