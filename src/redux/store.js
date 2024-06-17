import {legacy_createStore as createStore , combineReducers} from 'redux';
import coinReducer from './reducers/coinReducer';

const rootReducer = combineReducers({
    coin: coinReducer,
});

const store = createStore(rootReducer);

export default store;