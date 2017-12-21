import { Observable } from "rxjs";
import { combineEpics } from "redux-observable";
import * as loginActions from "../actions/login";

function getUserEpic(action$) {
  return action$.ofType(loginActions.LOGIN_START);
}

export const rootEpic = combineEpics(getUserEpic);
