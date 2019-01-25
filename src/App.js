import React, { Component } from 'react';
import {
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import './App.css';
import AfcForm from './Components/AfcForm';
import AfcTable from './Components/AfcTable';

import uniqueId from './utility/tools';

class App extends Component {
   state = {
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

  handleChange = (event) => {
    this.setState({ selectedEvent: event })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    let { Name, Total, eventtype } = event.target.elements;

    this.setState(prevState => {
      let eventObject = this.state.events[eventtype.value];

      /* new people id */
      let personId = uniqueId();

      /* new people object */
      let newPeople = {
        personId, name: Name.value
      }

      /* new events object */
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
    this.props.history.push(`/${eventtype.value}`);

  }
  handleSort(field) {
    console.log('sort', field)

  }

  render() {
    return (
      <div className="App">
        <Link to='/jaffa' onClick={() => this.handleChange('jaffa')} className="gap">Jaffa</Link>
        | 
        <Link to='/cracker' onClick={() => this.handleChange('cracker')} className="gap">Cracker</Link>
        |
        <Link to='/form' className="gap">Add entry</Link>

        <Switch>
          <Route exact path="/form" render={({history}) => (
            <AfcForm events={this.state.events} handleFormSubmit={this.handleFormSubmit.bind(this)} />
          )}/>
          <Route path="/:id" render={({history}) => (
            <AfcTable
              eventData={this.state.events[this.state.selectedEvent]}
              selectedEvent={this.state.selectedEvent}
              people={this.state.people}
              handleSort={this.handleSort}
            />
          )}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
