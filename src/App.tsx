import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// components
import Footer from "./components/organisms/Footer";
import HomeScreen from "./screens/HomeScreen";
import SignupScreen from "./screens/SignupScreen";

function App() {
  // hooks
  // state

  const [loading] = useState(false);
  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<SignupScreen />} />
            <Route path="/home" element={<HomeScreen />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
