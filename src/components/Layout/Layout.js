import React from 'react';
import Navbar from '../Navbar';

const Layout = ({ children }) => (
    <main className="bg-gray-800">
        <Navbar />
        <div className="px-10 py-4">
            { children }
        </div>
    </main>
);

export default Layout;
