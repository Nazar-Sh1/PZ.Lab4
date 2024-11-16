// App.js
import React from "react";
import AddRisk from "./components/AddRisk";
import RiskList from "./components/RiskList";

function App() {
  return (
    <div>
      <h1>Система управління ризиками розробки ПЗ</h1>
      <AddRisk />
      <RiskList />
    </div>
  );
}

export default App;
