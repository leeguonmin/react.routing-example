// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { Routes, Route } from "react-router-dom";
import Home from "/src/pages/Home";
import About from "/src/pages/About";
import Contact from "/src/pages/Contact";
import Dashboard from "/src/pages/Dashboard/Dashboard";
import Header from "/src/components/Header";
import Navber from "/src/components/Navber";

import Profile from "/src/pages/Dashboard/Profile";
import Settings from "/src/pages/Dashboard/Settings";

function App() {
  return (
    <div>
      <Header />
      <Navber />
      <article>
        {/* Routing 정보 객체 */}
        <Routes>
          {/* 개별 Router 객체들  */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Nested Routing 하위 라우팅? 추가 */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile/:userid" element={<Profile />} />
            <Route path="srttings" element={<Settings />} />
          </Route>
        </Routes>
      </article>
    </div>
  );
}

export default App;
