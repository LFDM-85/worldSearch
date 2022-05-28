import React from "react";
import "./App.css";
import SearchPage from "./components/pages/SearchPage/SearchPage";
import SideBar from "./components/pages/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="searchpage">
        <SearchPage />
      </div>
    </div>
  );
}

export default App;
