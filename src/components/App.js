import React from "react";
import { Provider } from "react-redux";
import Results from "./Results";
import store from "../store";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Results />
      </div>
    </Provider>
  );
}

export default App;
