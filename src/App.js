import React, { Component } from 'react';
import {
    Switch,
    Route,
    Link,
    withRouter,
    Redirect
} from "react-router-dom";
import './App.css';
import AfcForm from './Components/AfcForm';
import AfcTable from './Components/AfcTable';

class App extends Component {
   state = {
   	events: {
   		  jaffa: [
	  			{ personId: 1, name: 'Javier', total: 6 },
	  			{ personId: 2, name: 'John', total: 4 }
	  		],
	  	  cracker: [
	  			{ personId: 3, name: 'Paul', total: 55 },
	  			{ personId: 4, name: 'Serg', total: 33 }
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
      return {
        events: {
          [eventtype.value]: this.state.events[eventtype.value].concat({
            personId: 22,
            name: Name.value,
            total: Total.value
          })
        }
      }
    });
    this.props.history.push(`/${eventtype.value}`);

  }

  render() {
    return (
      <div className="App">
        <Link to='/jaffa' onClick={() => this.handleChange('jaffa')}>Jaffa</Link>
        <Link to='/cracker' onClick={() => this.handleChange('cracker')}>Cracker</Link>
        <Link to='/form'>Add entry</Link>

        <Switch>
          <Route exact path="/form" render={({history}) => (
            <AfcForm events={this.state.events} handleFormSubmit={this.handleFormSubmit.bind(this)} />
          )}/>
          <Route path="/:id" render={({history}) => (
            <AfcTable
              eventData={this.state.events[this.state.selectedEvent]}
              selectedEvent={this.state.selectedEvent}
            />
          )}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
