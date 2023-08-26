import { createStore, compose, applyMiddleware } from "redux";
import promiseMiddleware from 'redux-promise';
import combinedReducers from "./reducers/indexReducers";


const ReduxStor = () => {
    const webToolEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middlewareEnhancers = applyMiddleware(promiseMiddleware);
    const composedEnhancers = webToolEnhancers(middlewareEnhancers);
    const stor = createStore(combinedReducers, composedEnhancers);
    return stor;
};

export default ReduxStor;