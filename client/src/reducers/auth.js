import {
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
}

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
        case LOGIN_SUCCESS:
          localStorage.setItem('token', payload.token);
          return {
              ...state,
              ...payload,
              isAuthenticated: true,
              loading: false
          }
  
      case LOGIN_FAIL:
      case AUTH_ERROR:
      case LOGOUT:
          localStorage.removeItem('token');
          return {
              ...state,
              token: null,
              isAuthenticated: false,
              loading: false
          }
     
      default:
          return state;
  }
}