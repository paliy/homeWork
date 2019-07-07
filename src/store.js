import { createStore, applyMiddleware } from "redux";
import apiReducer from './reducers/apiReducer';
import thunk from "redux-thunk";
import {loadState, saveState} from './reducers/localStorage'

const persistedState = loadState();
const store = createStore(
  apiReducer,
  persistedState,
  applyMiddleware(thunk)
);

store.subscribe(() => {
  saveState(store.getState());
})

export default store;
