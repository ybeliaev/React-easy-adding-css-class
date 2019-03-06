import React from "react";

import ListItem from "../list-item";
import "./list.css";

const List = ({ todos }) => {
  const elements = todos.map(item => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-item">
        <ListItem {...itemProps} />
      </li>
    );
  });
  return <ul className="todo-list">{elements}</ul>;
};
export default List;
