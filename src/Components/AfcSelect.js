import React, { Component } from 'react';

class AfcSelect extends Component {
  render() {

  	const {events, name} = this.props;
	const options = Object.keys(events).map(key => <option key={key} value={key}>{key}</option>);

    return (
      <select name={name} key={name}>
      	{options}
      </select>
    );
  }
}

export default AfcSelect;