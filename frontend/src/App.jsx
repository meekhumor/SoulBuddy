import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './index.css'

import Layout from "./Layout";
import Home from "./components/Home/Home";
import Gender from "./components/UserData/Gender";
import Date from "./components/UserData/Date";
import Time from "./components/UserData/Time";
import Place from "./components/UserData/Place";
import Verify from "./components/UserData/Verify";
import BirthChart from "./components/Birthchart";
import Chart from "./components/Chart/Chart";
import Dashboard from "./components/Dashboard/Dashboard";
import ProxyRequest from "./components/Proxy";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home/>} />
            <Route path="/gender" element={<Gender/>} />
            <Route path="/date" element={<Date/>} />
            <Route path="/time" element={<Time/>} />
            <Route path="/place" element={<Place/>} />
            <Route path="/verify" element={<Verify/>} />
            <Route path="/birthchart" element={<BirthChart/>} />
            <Route path="/chart" element={<Chart/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/proxy" element={<ProxyRequest/>} />









          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;