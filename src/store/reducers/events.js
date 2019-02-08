import UUID from 'uuid-v4';
import { LIST_EVENTS, ADD_USER_TO_EVENT, CHANGE_SELECTED_EVENT } from '../actions/types';

const defaultState = {
    people: [      
      {personId: 1, name: 'Javier'},
      {personId: 2, name: 'John'},
      {personId: 3, name: 'Paul'},
      {personId: 4, name: 'Serg'}
    ],
   	events: {
   		  'jaffa': [
	  			{ personId: 1, total: 6 },
	  			{ personId: 2, total: 4 }
	  		],
	  	  'cracker': [
	  			{ personId: 3, total: 55 },
	  			{ personId: 4, total: 33 }
	  		]
  		},
      selectedEvent: 'jaffa'
  }

    /*
    this.setState(prevState => {
      let eventObject = this.state.events[eventtype.value];

 
      let personId = UUID();

 
      let newPeople = {
        personId, name: Name.value
      }


      let newData = prevState.events[eventtype.value].concat({
        personId,
        total: Total.value
      });

      return {
        ...prevState,
        people: prevState.people.concat(newPeople),
        events: {
          ...prevState.events,
          [eventtype.value]: newData
        },
        selectedEvent: eventtype.value
      }

    });
    */

export const eventsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case LIST_EVENTS:
            return state;

        case ADD_USER_TO_EVENT: 
            let { name, total, eventType } = action.data;

            let personId = UUID();
    
            let newPeople = {
                personId, name: name
            }
    
            let newData = state.events[eventType].concat({
                personId,
                total: total
            });
    
            return {
                ...state,
                people: state.people.concat(newPeople),
                events: {
                    ...state.events,
                    [eventType]: newData
                },
                selectedEvent: eventType
            };

        case CHANGE_SELECTED_EVENT:
            return {
                ...state,
                selectedEvent: action.data
            };

        default:
            return state;
    }
};