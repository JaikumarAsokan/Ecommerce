import React from "react";
import DataComponent from "./components/DataComponent";
import appCSS from "./App.module.css"

function App() {
  return (
    <div className={appCSS.ap}>
      <h1>E - commerce</h1>
      <DataComponent/>
    </div>
  );
}

export default App;
