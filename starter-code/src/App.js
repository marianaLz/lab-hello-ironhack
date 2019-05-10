import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="display">
          <div className="nav">
            <img src="./images/ironhack-logo.svg" alt="ironhack-logo" />
            <img src="./images/menu-top.svg" alt="top-menu" />
          </div>
          <div>
            <h1>
              Say Hello to <br />
              ReactJS
            </h1>
            <p>
              You will learn a Frontend <br /> framework from scratch to <br />
              become a Ninja developer
            </p>
            <button>Awesome!</button>
          </div>
        </div>
        <div className="iconBar">
          <div className="iconTab">
            <img src="./images/icon1.png" />
            <h4>Declarative</h4>
            <p>React makes it painless to create interactive UIs</p>
          </div>
          <div className="iconTab">
            <img src="./images/icon2.png" />
            <h4>Components</h4>
            <p>Build encapsulated components that manage their state</p>
          </div>
          <div className="iconTab">
            <img src="./images/icon3.png" />
            <h4>Single-Way</h4>
            <p>A set of immutable values are passed to the components</p>
          </div>
          <div className="iconTab">
            <img src="./images/icon4.png" />
            <h4>JSX</h4>
            <p>Statically typed designed to run on modern browsers</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
