import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Repositories from '../pages/Repositories';

export default function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="/repos" element={<Repositories />} />
            </Routes>
        </>
    );
}