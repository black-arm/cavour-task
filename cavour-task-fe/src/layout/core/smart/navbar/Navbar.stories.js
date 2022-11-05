import React from "react";
import { Navbar } from './Navbar';
import { BrowserRouter } from "react-router-dom";

export default {
    title: 'core/smart/Navbar',
    component: Navbar
};

export const Template = (args) => <BrowserRouter><Navbar {...args}></Navbar></BrowserRouter>;