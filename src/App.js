import React from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import Home from "./components/Home/Home";
import Posts from "./components/Posts/Posts";
import Dashboard from "./components/Dashboard/Dashboard";
import Contact from "./components/Contacts/Contact";

const App = () => {
  return (
    <>
      <Toolbar /> 
      <Home />
      <Posts />
      <Dashboard />
      <Contact />
    </>
  );
};

export default App;
