import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './index.css'

import Layout from "./Layout";
import Home from "./components/Home/Home";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;