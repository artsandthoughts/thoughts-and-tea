import React from 'react';
import { Menu, X } from 'lucide-react';

const NavigationItem = ({ item }) => (
    <li className="group">
        <a 
            href={`#${item.toLowerCase().replace(' ', '-')}`} 
            className="block py-3 px-5 text-arts-medium hover:text-arts-accent transition-all duration-300 text-base font-medium"
        >
            {item}
            <span className="block h-px w-0 bg-arts-accent group-hover:w-full transition-all duration-300 mt-1 opacity-0 group-hover:opacity-100"></span>
        </a>
    </li>
);

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => (
    <nav className="bg-arts-white sticky top-0 z-50 shadow-subtle border-b border-arts-light">
        <div className="container mx-auto">
            <div className="flex justify-between items-center">
                <div className="py-3 px-4 flex items-center">
                    <span className="font-serif text-arts-accent text-xl font-semibold">A&T</span>
                </div>
                
                <button 
                    className="md:hidden px-4 py-3 text-arts-medium hover:text-arts-accent transition-colors duration-300"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
                
                <div className={`${
                    isMenuOpen 
                        ? 'absolute top-full left-0 right-0 bg-arts-white border-b border-arts-light shadow-subtle' 
                        : 'hidden'
                    } md:block md:static md:bg-transparent md:border-0 md:shadow-none`}
                >
                    <ul className="md:flex py-2 px-4 md:px-0">
                        {['About', 'Events', 'Arts', 'Gōngfū Chá', 'Join Us'].map((item) => (
                            <NavigationItem key={item} item={item} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </nav>
);

export default Navigation;