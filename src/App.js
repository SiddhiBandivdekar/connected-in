import "./App.css";
import Login from "./components/Login/Login";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
