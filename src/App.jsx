import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home"
import MartialArts from "./pages/MartialArts"
import DigitalArts from "./pages/DigitalArts"
import Bio from "./pages/Bio"
import Project from "./pages/Project"
import Philosophy from "./pages/Philosophy"
import NotFound from "./pages/NotFound"
import Nav1 from "./components/nav/Nav1";

export default function App(){
    return(
        <>
            <BrowserRouter>
            <Nav1/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path='martial_arts' element={<MartialArts/>}/>
                <Route path='digital_arts' element={<DigitalArts/>}/>
                <Route path='bio' element={<Bio/>}/>
                <Route path='project' element={<Project/>}/>
                <Route path='philosophy' element={<Philosophy/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            </BrowserRouter>
        </>
    )
}