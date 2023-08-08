import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import AllPlayers from "./components/AllPlayers/AllPlayers";
import EditPlayer from "./components/EditPlayer.js/EditPlayer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/players" element={<AllPlayers />}></Route>
          <Route path="/players/:id/edit" element={<EditPlayer />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
