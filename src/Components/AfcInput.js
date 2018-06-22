import React, { Component } from 'react';

class AfcInput extends Component {
  render() {

    const {type, name} = this.props;

    return (
      <input type={type} name={name} placeholder={name} className={`afc-form__${type}`} />
    );
  }
}

export default AfcInput;