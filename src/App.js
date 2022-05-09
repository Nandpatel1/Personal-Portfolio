import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import ContactMe from './ContactMe';
const App = ()=>{
  return (
    <>
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/about' element = {<About/>}></Route>
        <Route path='/project' element = {<Project/>}></Route>
        <Route path='*' element = {<h1>okkk</h1>}></Route>
        <Route path='/contact' element = {<ContactMe/>}></Route>
      </Routes>
    </>
  )
};

export default App;