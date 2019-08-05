import React from 'react';
import './App.css';
import UsersList from './containers/users-list'


function App() {

  return (
    <div className="App">
      <h2>Users:</h2>
      <UsersList />
      <hr />
    </div>
  );
}

export default App;
