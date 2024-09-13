import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp";
import Home from "./Login/Home";
import Update from "./Login/UpdateProfile";
import Dashboard from "./Dashboard/Dashboard";
import Posts from "./Components/Posts";
import DetailedView from "./Dashboard/DetailedView";
import AboutUs from "./Dashboard/AboutUs";
import PageNotFound from "./Components/404Page";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path="/updated/:id" element={<Update />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/dashboard/detail" element={<DetailedView />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
