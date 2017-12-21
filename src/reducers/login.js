import * as loginAction from "../actions/login";

const initState = {
  user: { name: "Oshri Kdoshim" },
  loading: false,
  error: undefined
};

export default (state = initState, action) => {
  switch (action.type) {
    case loginAction.LOGIN_START:
      return Object.assign({}, state, {
        loading: true
      });
      break;

    case loginAction.LOGIN_SUCCESS:
      return LoginSuccess(state, action);
      break;

    case loginAction.LOGIN_ERROR:
      return LoginError(state, action);
      break;

    default:
      return state;
  }
};

function LoginSuccess(state, action) {
  const payload = action.payload;
  const newState = Object.assign({}, state);
  newState.user = payload;
  newState.loading = false;
  return newState;
}

function LoginError(state, action) {
  const payload = action.payload;
  const newState = Object.assign({}, state);
  newState.error = payload;
  newState.loading = false;
  return newState;
}
