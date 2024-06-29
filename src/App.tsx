import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PersistentDrawerLeft from "./Components/Drawer";
import MultiSelectTreeView from "./Components/Treeview";
import CustomIcons from "./Components/Treeview";
import AppRouuter from "./Config/AppRouter";

function App() {
  return (
    <div className="App">
      <AppRouuter />
    </div>
  );
}

export default App;
