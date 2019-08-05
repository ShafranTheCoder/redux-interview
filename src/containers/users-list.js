import React, { Component } from 'react';
import { connect } from 'react-redux';

class UsersList extends Component {
  showList() {
    return this.props.users.map((user) => {
      return (
        <div className="card">
          <p key={user.id}>
            <span>Name: </span>{user.name}</p>
          <p key={user.id}>
            <span>Surname: </span>{user.surname}</p>
          <p key={user.id}>
            <span>Desc: </span>{user.desc}</p>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="card-wrapper">
        {this.showList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(UsersList);