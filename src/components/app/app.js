import React, { Component } from "react";
import List from "../list";

import "./app.css";

export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      this.createItem("Drink Coffee", true, true),
      this.createItem("Create React App", false, true),
      this.createItem("Study Bible"),
      this.createItem("Read book of Hemingway")
    ]
  };
  createItem(label, done, important) {
    return {
      label,
      done,
      important,
      id: this.maxId++
    };
  }
  render() {
    return (
      <div className="app">
        <List todos={this.state.todoData} />
      </div>
    );
  }
}
