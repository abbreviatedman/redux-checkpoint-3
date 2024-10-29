import React, { useEffect, useState } from "react";
import store from "./store";

const {getState, subscribe} = store;

const Footer = () => {
  const [preferences, setPreferences] = useState(getState().preferences);
  const [todos, setTodos] = useState(getState().todos);
  useEffect(() => {
    return subscribe(() => {
      setPreferences(getState().preferences);
      setTodos(getState().todos);
    })
  }, [])

  const footerStyles = {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: preferences.darkMode ? "#1f1f1f" : "#f0f0f0",
    borderTop: preferences.darkMode ? "1px solid #444" : "1px solid #ddd",
    color: preferences.darkMode ? "white" : "black",
    textAlign: "center",
  };

  const totalTasks = todos.length;
  const completedTasks = todos.filter((todo) => todo.completed).length;
  const remainingTasks = totalTasks - completedTasks;

  return (
    <footer style={footerStyles}>
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks}</p>
      <p>Remaining Tasks: {remainingTasks}</p>
    </footer>
  );
};

export default Footer;
