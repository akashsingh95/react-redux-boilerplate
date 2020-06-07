import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './containers/list.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React redux boiler plate
        </p>
      </header>
      <UserList></UserList>
    </div>
  );
}

export default App;
