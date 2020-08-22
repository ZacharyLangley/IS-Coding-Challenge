import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import app from './appReducer';

export default (history) => combineReducers({
    app,
    router: connectRouter(history)
});