import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TodoContainer from "./TodoContainer";
import store from "./store";

const {
  getState, // for getting the state from the Redux store
  dispatch, // for sending actions to the reducer
  subscribe, // for re-rendering our component if Redux's state changes
} = store;

const App = () => {
  const [preferences, setPreferences] = useState(getState().preferences)

  useEffect(() => {
    const unsubscribe = subscribe(() => {
      setPreferences(getState().preferences)
    })

    return unsubscribe;
  }, [])

  const appStyles = {
    backgroundColor: preferences.darkMode ? "#121212" : "#fff",
    color: preferences.darkMode ? "#fff" : "#000",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <div style={appStyles}>
      <Header />
      <TodoContainer />
      <Footer />
    </div>
  );
};

export default App;
