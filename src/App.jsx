import React, { Component } from "react";
import Luck from "./components/Luck";
import Harm from "./components/Harm";
import "./App.css";
import { Provider } from "mobx-react";
import luckStore from "./store/LuckStore";
import harmStore from "./store/HarmStore";

class App extends Component {
  render() {
    return (
      <Provider luckStore={luckStore} harmStore={harmStore}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Monster of the Week character tracker</h1>
          </header>
          <div id="CharacterName">
            <input type="text" name="CharacterName" id="CharacterName" />
            <p>, the Flake</p>
          </div>
          <Luck />
          <Harm />
        </div>
      </Provider>
    );
  }
}

export default App;
