import React from 'react';
import TeapotLogo from './images/teapot.svg'; // TODO: Replace with a more arts-oriented logo

const Header = () => (
    <header className="bg-arts-white border-b border-arts-light py-16 md:py-24">
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-10 md:mb-0">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-arts-dark font-serif">
                        Arts <span className="text-arts-accent">&</span> Thoughts
                    </h1>
                    <p className="text-lg md:text-xl text-arts-medium max-w-xl leading-relaxed">
                        University Club for Arts, Science & <span className="accent-text">Creative Exploration</span>
                    </p>
                </div>
                
                <div className="relative">
                    <div className="circle-image p-1 border-4 border-arts-light bg-arts-white shadow-subtle">
                        <div className="circle-image border border-arts-accent p-6 bg-arts-white">
                            <img
                                src={TeapotLogo}
                                alt="Arts & Thoughts Logo"
                                className="w-28 h-28 md:w-32 md:h-32 opacity-90"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
);

export default Header;