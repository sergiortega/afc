import React, { Component } from 'react';

class AfcSelect extends Component {
  render() {

  	const {events} = this.props;
	const options = Object.keys(events).map(key => <option key={key} value={key}>{key}</option>);

    return (
      <select>
      	{options}
      </select>
    );
  }
}

export default AfcSelect;