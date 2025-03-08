import React from 'react';
import { Mail, Calendar, MapPin } from 'lucide-react';

const FooterLink = ({ href, children, icon: Icon }) => (
    <a 
        href={href}
        className="flex items-center gap-2 text-arts-medium hover:text-arts-accent transition-all duration-300 group py-1"
        target="_blank" 
        rel="noopener noreferrer"
    >
        <span className="text-arts-accent/80 group-hover:text-arts-accent transition-colors duration-300">
            <Icon size={18} />
        </span>
        <span>{children}</span>
    </a>
);

const Footer = () => (
    <footer className="bg-arts-light text-arts-dark border-t border-arts-light pt-12 pb-8">
        <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                    <h3 className="text-2xl font-serif font-bold mb-4 text-arts-dark brush-title">
                        Arts & Thoughts
                    </h3>
                    <p className="text-arts-medium max-w-md leading-relaxed mb-6">
                        Join our community of artists, scientists, and thinkers exploring
                        the intersections of creativity and knowledge.
                    </p>
                    
                    <div className="flex flex-col space-y-2">
                        <FooterLink href="mailto:sol@astrius.dev" icon={Mail}>
                            me@danielsol.dev
                        </FooterLink>
                        <FooterLink href="https://calendar.google.com" icon={Calendar}>
                            View our event calendar
                        </FooterLink>
                        <FooterLink href="https://maps.app.goo.gl/idKS2Vvp6c6QBWSP7" icon={MapPin}>
                            University Campus, Campus Activity Center
                        </FooterLink>
                    </div>
                </div>
                
                <div className="md:text-right">
                    <h3 className="text-2xl font-serif font-bold mb-4 text-arts-dark brush-title md:inline-block">
                        Quick Links
                    </h3>
                    <nav className="flex flex-col md:items-end space-y-2 mt-6">
                        {['About', 'Events', 'Arts', 'Gōngfū Chá', 'Join Us'].map(item => (
                            <a 
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                className="text-arts-medium hover:text-arts-accent transition-all duration-300 py-1"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
            
            <div className="divider"></div>
            
            <div className="text-center text-arts-medium">
                <p className="text-sm">&copy; {new Date().getFullYear()} Arts & Thoughts University Club. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;