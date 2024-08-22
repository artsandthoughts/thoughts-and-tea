import React from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => (
    <nav className="bg-tea-green text-tea-white sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <ul className={`${isMenuOpen ? 'block' : 'hidden'} md:flex space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0`}>
                    {['About', 'Events', 'Gōngfū Chá', 'Join Us'].map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-tea-brown transition duration-300 text-lg">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
);

export default Navigation;