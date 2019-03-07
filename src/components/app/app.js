import React, { Component } from "react";
import List from "../list";

import "./app.css";

export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      this.createTodoItem("Drink Coffee", true, true),
      this.createTodoItem("Create React App", false, true),
      this.createTodoItem("Study Bible"),
      this.createTodoItem("Read book of Hemingway")
    ]
  };
  createTodoItem(label, done, important) {
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
