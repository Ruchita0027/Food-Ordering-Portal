import { createStore, applyMiddleware, compose } from "redux";
import appReducer from './appReducer'
import { persistStore } from "redux-persist";

const composeEnhancers = window.__REDUX_DEVTOOL_EXTENSION_COMPOSE_|| compose;
   
const store = createStore(appReducer, composeEnhancers(applyMiddleware()))

const persistor = persistStore(store);

export { store, persistor };