import React, { useState } from 'react';
import { MenuIcon } from '@heroicons/react/solid';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 flex flex-wrap justify-end items-center p-2">
            <button className="" type="button" onClick={() => setIsOpen(!isOpen)}>
                <MenuIcon className="w-10 h-10 text-white" />
            </button>
        </nav>
    );
};

export default Navbar;
