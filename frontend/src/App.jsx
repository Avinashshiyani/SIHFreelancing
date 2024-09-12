import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp";
import Home from "./Login/Home";
import Update from "./Login/UpdateProfile";
import Dashboard from "./Dashboard/Dashboard";
import DetailedView from "./Dashboard/DetailedView";
import Navbar from "./Navbar/Navbar";
const App = () => {
  // useState
  const [data, setData] = useState();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path="/updated/:id" element={<Update />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/dashboard/detail" element={<DetailedView />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
