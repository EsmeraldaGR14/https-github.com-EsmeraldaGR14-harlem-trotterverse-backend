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
          <Route path="/" element={<HomePage />} />
          <Route path="/trotters" element={<ActivePlayers />}>
            <Route path=":id"></Route>
          </Route>
          <Route path="/user-trotter" element={""}>
            <Route path="new" element={<CreateTrotter />} />
            <Route path=":id" element={""} />
            <Route path=":id/edit" element={<EditTrotter />} />
          </Route>
          <Route path="*" element={""} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
