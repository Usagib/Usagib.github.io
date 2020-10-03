const LOGIN = 'LOGIN';

const login = credential => (
  { type: LOGIN, credential }
);

export {
  login, // eslint-disable-line import/prefer-default-export
};
