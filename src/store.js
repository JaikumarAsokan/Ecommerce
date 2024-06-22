import { applyMiddleware, compose, createStore } from "@reduxjs/toolkit";
import { thunk as reduxThunk } from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(reduxThunk));

const configureStore = () => createStore(rootReducer, enhancer);

export default configureStore;
