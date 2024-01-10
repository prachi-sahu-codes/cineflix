import { Routes, Route } from "react-router";
import { Home } from "./pages";
import "./App.css";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
