import { createStore } from "redux";
import messageReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(messageReducer,composeWithDevTools());

export default store;