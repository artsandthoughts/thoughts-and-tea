import React from 'react';

const Footer = () => (
    <footer className="bg-arts-black text-arts-white py-10">
        <div className="container mx-auto px-4 text-center">
            <p className="mb-4 text-lg">&copy; 2024 Arts & Thoughts University Club. All rights reserved.</p>
            <p className="text-lg">
                Webmaster:{' '}
                <a href="mailto:me@danielsol.dev"
                   className="underline hover:text-arts-gold transition duration-300">
                    me@danielsol.dev
                </a>
            </p>
        </div>
    </footer>
);

export default Footer;