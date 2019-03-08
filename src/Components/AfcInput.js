import React, { Component } from 'react';

class AfcInput extends Component {
  render() {

    const {type, name, onHandle } = this.props;

    return (
      <input type={type} name={name} placeholder={name} className={`afc-form__${type}`} onKeyDown={() => onHandle()} />
    );
  }
}

export default AfcInput;