import { LIST_EVENTS, ADD_USER_TO_EVENT, CHANGE_SELECTED_EVENT } from './types';

export const listEvents = () => ({ type: LIST_EVENTS });

export const addEvents = ({ name, total, eventType }) => {
    //do some actions
    //return json object for reducer
    return {
        type: ADD_USER_TO_EVENT,
        data: {
            name, total, eventType
        }
    }
}

export const changeSelectedEvent = selectedEvent => ({ type: CHANGE_SELECTED_EVENT, data: selectedEvent });
