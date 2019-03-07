import React, { Component } from "react";
import "./list-item.css";

export default class ListItem extends Component {
  state = {
    done: false
  };

  render() {
    const { label, important, done } = this.props;
    const style = {
      color: important ? "steelblue" : "black",
      fontWeight: important ? "bold" : "normal",
      textDecoration: done ? "line-through" : "none"
    };
    let classNames = "list-item";
    // if (done) {
    //   classNames += " done";
    // }
    // if (important) {
    //   classNames += " important";
    // }
    return (
      <span className={classNames}>
        <span className="list-item-label" style={style}>
          {label}
        </span>

        <button type="button" className="btn">
          <i className="fa fa-exclamation" />
        </button>

        <button type="button" className="btn">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
