import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Layout } from "../layout/Layout";

export const Router = () => {

    return (
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Layout />} />
          </Routes>
        </BrowserRouter>
    )

}