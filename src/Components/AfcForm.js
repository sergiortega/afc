import React, { Component } from 'react';
import AfcInput from './AfcInput';
import AfcSelect from './AfcSelect';

class AfcForm extends Component {
  render() {

    const {events, handleFormSubmit} = this.props;

    return (
      <div className="afc-form">
      	<form onSubmit={handleFormSubmit}>
          <AfcSelect events={events} /><br />
      		<AfcInput type="text" name="Name" /><br />
          <AfcInput type="text" name="Total" /><br />
      		<AfcInput type="submit" />
      	</form>
      </div>
    );
  }
}

export default AfcForm;