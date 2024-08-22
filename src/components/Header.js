import React from 'react';
import TeapotLogo from './images/teapot.svg';

const Header = () => (
    <header className="bg-tea-black text-tea-white py-20 relative">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div>
                <h1 className="text-4xl font-serif mb-2">Thoughts and Tea | 思茶</h1>
                <p className="text-lg text-blue-300 border-l-4 border-red-500 pl-3">
                    University Club for Tea Enthusiasts and Thinkers
                </p>
            </div>
            <img
                src={TeapotLogo}
                alt="Teapot Logo"
                className="w-32 h-32"
            />
        </div>
    </header>
);

export default Header;