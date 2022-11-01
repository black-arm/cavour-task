import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Home } from "../../pages/home/Home";
import Navbar from '../../core/smart/navbar/Navbar';


export default function BaseTemplate() {

    return <>
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/new-project" element={<div>Project Page</div>}></Route>
        </Routes>
    </>
}