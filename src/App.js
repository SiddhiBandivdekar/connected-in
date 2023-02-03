import "./App.css";
import Login from "./components/Login/Login";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

const HomePage = () => (
  <>
    <Header />
    <Home />
  </>
);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          // render={() => (
          //   <>
          //     <Header />
          //     <Home />
          //   </>
          // )}

          element={<HomePage />}
        />
      </Routes>
    </div>
  );
}

export default App;
