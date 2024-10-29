import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import store from "./store";

const {subscribe, getState} = store;

const TodoList = (props) => {
  const [todos, setTodos] = useState(getState().todos);
  useEffect(() => {
    return subscribe(() => {
      setTodos(getState().todos);
    })
  }, [])

  const {
    deleteTodo,
    toggleTodo,
  } = props;

  const listStyles = {
    listStyle: "none",
    padding: 0,
  };

  return (
    <ul style={listStyles}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
