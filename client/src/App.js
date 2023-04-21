import React, { useState, useEffect, intialRef, useRef } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import "./App.css";
// import Route from "./Components/Routes";
import Testing from "./Components/Testing";
import Article1 from "./Components/Articles/Article1";
import Article2 from "./Components/Articles/Article2";
import Article3 from "./Components/Articles/Article3";

import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  const initialRef = useRef(true);
  const [user, setUser] = useState();

  const getUser = async () => {
    const res = await axios.get("http://localhost:5043/auth/getdetail", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    // if(res.data!==null){
    //   navigate("/")
    // }
    setUser(res.data);
  };

  useEffect(() => {
    if (!initialRef.current) {
      return;
    }
    initialRef.current = false;
    getUser();
  }, [user]);

  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  return (
    !loading && (
      <div>
        <BrowserRouter>
          <Navbar user={user} setUser={setUser} />
          <Routes>
            user && (
            <Route path="/games" element={<Content user={user} />} />
            <Route path="/dashboard" element={<Dashboard user={user} />} />
            <Route path="/article1" element={<Article1 />} />
            <Route path="/article2" element={<Article2 />} />
            <Route path="/article3" element={<Article3 />} />
            <Route
              path="/login"
              element={<Login user={user} getUser={getUser} />}
            />
            <Route path="/" element={<Content user={user} />} />
            <Route path="/register" element={<Register />} />)
          </Routes>
          {/* <Login /> */}
          {/* <Dashboard /> */}
          <Footer />
        </BrowserRouter>
      </div>
    )
  );
  // );
}

export default App;
