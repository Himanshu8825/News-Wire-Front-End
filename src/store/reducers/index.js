import { combineReducers} from 'redux';
import newsReducer from './newsReducer';

// for combining each and every reducers in one  we use combineReducers
const combinedReducers = combineReducers({
    newsReducer,
})

export default combinedReducers;