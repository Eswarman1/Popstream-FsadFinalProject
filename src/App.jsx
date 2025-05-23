import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import Login from './Pages/Login/Login';


const App = () => {
  const [sidebar, setSidebar] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
const [userEmail, setUserEmail] = useState("");

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home  sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />

      </Routes>
    </div>
  );
};

export default App;
