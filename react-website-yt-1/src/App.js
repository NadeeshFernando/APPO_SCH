import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NAV from "./components/NAV";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <link rel="stylesheet" href="index.css" />

      <Router>
        <NAV />
        <Routes>
          <Route path="/" exact Component={Home} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
