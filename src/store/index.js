import { combineReducers } from 'redux';
import { eventsReducer } from './reducers/events';

export default combineReducers({
    event: eventsReducer
});
