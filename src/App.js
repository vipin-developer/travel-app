import logo from "./logo.svg";
import "./App.css";
import MainComponent from "./components/MainComponent";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/admin/Admin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
