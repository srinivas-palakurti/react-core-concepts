import React from 'react';
import './App.css';

function App() {
  /* return React.createElement(
    "h1",
    { className: "App" },
    "Hello from 'React.createElement' component"
  ); */
  console.log("ToggleButtonOnOff funtional component Render");
  return React.createElement(
    "div", 
    { className: "App" },
    React.createElement(
      "h1", 
      null, 
      "Hello from Create Element component"
    )
  );

}

export default App;
