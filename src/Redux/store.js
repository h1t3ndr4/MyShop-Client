import { loggerReducer } from "./Logger/reducer";
import { prodReducer, detailsReducer } from "./Product/reducer";

import { createStore, applyMiddleware, combineReducers } from "redux";

const rootReducer = combineReducers({
  login: loggerReducer,
  products: prodReducer,
  product: detailsReducer,
});

const thunk = (store) => (next) => (action) => {
  if (typeof action === "function") return action(store.dispatch);
  next(action);
};

export const store = createStore(rootReducer, applyMiddleware(thunk));
