import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NAV from "./components/NAV";
import Home from "./components/pages/Home";
import getStart from "./components/pages/getStart";
import "./App.css";
import WatchVideo from "./components/pages/watchVideo";
import whatisD from "./components/whatisD";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <>
      <div className="App"></div>

      <Router>
        <NAV />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/getStart" Component={getStart} />
          <Route path="/watchVideo" Component={WatchVideo} />
          <Route path="/whatisD" Component={whatisD} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
