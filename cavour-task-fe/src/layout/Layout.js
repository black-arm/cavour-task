import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const BaseTemplate = React.lazy(() => import('./templates/base-template/BaseTemplate'))
const AuthTemplate = React.lazy(() => import('./templates/auth-template/AuthTemplate'))
const ErrorTemplate = React.lazy(() => import('./templates/error-template/ErrorTemplate'))

export const Layout = () => {

    return <Routes>
        <Route path='/*' element={
            <React.Suspense fallback={<div>Loading...</div>}>
                <BaseTemplate></BaseTemplate>
            </React.Suspense>
        
        }></Route>
        <Route path='error' element={
            <React.Suspense fallback={<div>Loading...</div>}>
                <ErrorTemplate></ErrorTemplate>
            </React.Suspense>
        }></Route>
        <Route path='auth' element={
            <React.Suspense fallback={<div>Loading...</div>}>
                <AuthTemplate></AuthTemplate>
            </React.Suspense>
        }></Route>
    </Routes>
}