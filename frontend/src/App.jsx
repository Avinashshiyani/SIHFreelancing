import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider }  from "./Security/AuthContext";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp";
import Home from "./Login/Home";
import Update from "./Login/UpdateProfile";
import Dashboard from "./Dashboard/Dashboard";
import Posts from "./Components/Posts";

const App = () => {
  // State for managing data, if needed
  const [data, setData] = useState(null); // Initialize with null for clarity

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
