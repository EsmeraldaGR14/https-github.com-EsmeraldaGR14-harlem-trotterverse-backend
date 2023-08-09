import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import ActivePlayers from "./components/ActivePlayers/ActivePlayers";
import EditTrotter from "./components/EditTrotter/EditTrotter";
import CreateTrotter from "./components/CreateTrotter/CreateTrotter"; 

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/user-trotter" element ={<CreateTrotter/>}></Route>
          <Route path="/trotters" element={<ActivePlayers />}></Route>
          <Route path="/trotters/:id/edit" element={<EditTrotter />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
