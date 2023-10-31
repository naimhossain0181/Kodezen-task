import React, { useState } from "react";
import "./App.css";
import Outlet from "./components/Outlet";
import Sidebar from "./components/Sidebar";
const App = () => {
  const [sideWidth, setSideWidth] = useState(false);

  return (
    <div className="contain-wraper">
      <Sidebar sideWidth={sideWidth} />
      <Outlet sideWidth={sideWidth} setSideWidth={setSideWidth}/>
    </div>
  );
};

export default App;
