import todoReducer from './todoReducer';
import { combineReducers } from 'react-redux';

const reducers = combineReducers({
    key: todoReducer,
})

export default reducers;