import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Monster of the Week character tracker</h1>
        </header>
        <div id="CharacterName">
          <input type="text" name="CharacterName" id="CharacterName"/>
          <p>
            , the Flake
          </p>
        </div>

        
      </div>
    );
  }
}

export default App;
