import React from "react";
import Dashboard from "./views/Dashboard";
import Home from "./views/Home"; 
import NewEvent from "./views/NewEvent"; 
import Error from "./views/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="dashboard" element={<NewEvent />}>
        <Route path="events" element={<div Your Events/>}/>
        <Route path="vote" element={<div Your Events/>}/>
      </Route>
      <Route path="*" element={<Error />}/>
    </Routes>
  </BrowserRouter>
  )

}  

export default App;
