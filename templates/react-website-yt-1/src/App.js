import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NAV from "./components/NAV";
import Home from "./components/pages/Home";
import getStart from "./components/pages/getStart";

function App() {
  return (
    <>
      <link rel="stylesheet" href="index.css" />

      <Router>
        <NAV />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/getStart" Component={getStart} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
