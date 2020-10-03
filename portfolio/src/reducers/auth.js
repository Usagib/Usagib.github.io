const LOGIN = 'LOGIN';

const defaultState = {};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return action.credential;
    default:
      return state;
  }
};

export default authReducer;
