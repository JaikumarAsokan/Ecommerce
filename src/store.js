// import { applyMiddleware, compose, createStore } from "@reduxjs/toolkit";
// import { thunk as reduxThunk } from "redux-thunk";
// import rootReducer from "./reducers/rootReducer";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const enhancer = composeEnhancers(applyMiddleware(reduxThunk));

// const configureStore = () => createStore(rootReducer, enhancer);

// export default configureStore;


import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development mode
  
});

export default store;
