import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Home } from "../../pages/home/Home";
import Navbar from '../../core/smart/navbar/Navbar';


export default function BaseTemplate() {

    return <>
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/helo" element={<div>hello world</div>}></Route>
        </Routes>
    </>
}