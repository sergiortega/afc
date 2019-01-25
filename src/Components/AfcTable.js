import React, { Component } from 'react';

class AfcTable extends Component {
  render() {
    return (
      <div className="afc-table">
        <h1>{this.props.selectedEvent}</h1>
        <table>
          <tbody>
            <tr>
              <th onClick={()=>this.props.handleSort('name')}>Name</th>
              <th onClick={()=>this.props.handleSort('total')}>Total</th>
            </tr>
            {this.props.eventData && this.props.eventData.map(event => {
              return (
                <tr key={event.personId}>
                  <td>{this.props.people.find(p=>p.personId === event.personId).name}</td>
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