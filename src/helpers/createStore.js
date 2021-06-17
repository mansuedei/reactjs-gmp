import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "../store/reducers";

export default () => {
  return createStore(reducers, {}, applyMiddleware(thunk));
}
