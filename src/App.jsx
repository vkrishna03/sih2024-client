import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingLayout from "./layouts/LandingLayout";
import LandingPage from "./modules/landing/LandingPage";
import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingLayout />}>
            <Route path="/" element={<LandingPage />} />
          </Route>

          {/* Auth */}
          <Route path="/" element={<AuthLayout />}>
            <Route path="/login" element={<div>Login</div>} />
            <Route path="/register" element={<div>Register</div>} />
          </Route>

          {/* App User */}
          <Route path="/app" element={<AppLayout />}>
            <Route path="/projects" element={<div>Projects</div>} />
            <Route path="/ipr" element={<div>IPR</div>} />
            <Route path="/fundings" element={<div>Funding</div>} />
          </Route>

          {/* 404 Page */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
