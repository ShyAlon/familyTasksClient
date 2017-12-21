import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";

import rootReducer from "../reducers";
import { rootEpic } from "../epics";

const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configuresStore() {
  return createStore(rootReducer, applyMiddleware(epicMiddleware));
}
