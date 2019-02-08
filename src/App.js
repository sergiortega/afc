import React, { Component } from 'react';
import {
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import { connect } from 'react-redux';
import { listEvents, addEvents, changeSelectedEvent } from './store/actions/events';

import './App.css';
import AfcForm from './Components/AfcForm';
import AfcTable from './Components/AfcTable';


class App extends Component {
  handleChange = (event) => {
    this.props.changeSelectedEvent(event);
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    let { Name, Total, eventtype } = event.target.elements;

    this.props.addEvents({
      name: Name.value,
      total: Total.value,
      eventType: eventtype.value
    });

    this.props.history.push(`/${eventtype.value}`);

  }
  handleSort(field) {
    console.log('sort', field)

  }

  render() {
    console.log(this.props.event)
    return (
      <div className="App">
        <Link to='/jaffa' onClick={() => this.handleChange('jaffa')} className="gap">Jaffa</Link>
        | 
        <Link to='/cracker' onClick={() => this.handleChange('cracker')} className="gap">Cracker</Link>
        |
        <Link to='/form' className="gap">Add entry</Link>

        <Switch>
          <Route exact path="/form" render={({history}) => (
            <AfcForm events={this.props.data.events} handleFormSubmit={this.handleFormSubmit.bind(this)} />
          )}/>
          <Route path="/:id" render={({history}) => (
            <AfcTable
              eventData={this.props.data.events[this.props.data.selectedEvent]}
              selectedEvent={this.props.data.selectedEvent}
              people={this.props.data.people}
              handleSort={this.handleSort}
            />
          )}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.event
});

export default connect(mapStateToProps, { listEvents, addEvents, changeSelectedEvent })(withRouter(App));
