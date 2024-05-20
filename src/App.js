import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginForm from "./components/loginForm/LoginForm";
import Dashboard from "./containers/dashboard/Dashboard";
import "./App.css";
import Settings from "./containers/settings/Settings";

const App = () => {
  const [user, setUser] = useState(undefined);

  const handleLogin = (username, role) => {
    setUser({ username, role });
  };

  return (
    <div className="background">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route
            path="/"
            element={
              (!user ? <Dashboard user={user} /> : <Navigate to="/login" />)
            }
          />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
