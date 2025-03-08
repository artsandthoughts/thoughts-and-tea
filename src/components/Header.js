import React from 'react';
import TeapotLogo from './images/teapot.svg'; // TODO: Replace with a more arts-oriented logo

const Header = () => (
    <header className="bg-arts-black text-arts-white py-20 relative">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div>
                <h1 className="text-4xl font-serif mb-2">Arts & Thoughts</h1>
                <p className="text-lg text-blue-300 border-l-4 border-arts-purple pl-3">
                    University Club for Arts, Science & Creative Exploration
                </p>
            </div>
            <img
                src={TeapotLogo}
                alt="Arts & Thoughts Logo"
                className="w-32 h-32"
            />
        </div>
    </header>
);

export default Header;