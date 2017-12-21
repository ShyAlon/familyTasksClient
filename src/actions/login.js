export const LOGIN_START = "[ LOGIN ] Login User";
export const LOGIN_SUCCESS = "[ LOGIN ] Login Success";
export const LOGIN_ERROR = "[ LOGIN ] Login Error";

export const LoginStart = () => ({
  type: LOGIN_START
});

export const LoginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: user
});

export const LoginError = error => ({
  type: LOGIN_ERROR,
  payload: error
});
