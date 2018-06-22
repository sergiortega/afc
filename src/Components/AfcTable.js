import React, { Component } from 'react';

class AfcTable extends Component {
  render() {
    return (
      <div className="afc-table">
        <h1>{this.props.selectedEvent}</h1>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Total</th>
            </tr>
            {this.props.eventData.map(event => {
              return (
                <tr key={event.personId}>
                  <td>{event.name}</td>
                  <td>{event.total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AfcTable;