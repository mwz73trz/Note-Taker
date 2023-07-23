import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import SingleNotePage from "./pages/SingleNotePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/:id" element={<SingleNotePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
