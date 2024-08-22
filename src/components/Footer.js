import React from 'react';

const Footer = () => (
    <footer className="bg-tea-black text-tea-white py-10">
        <div className="container mx-auto px-4 text-center">
            <p className="mb-4 text-lg">&copy; 2024 Thoughts and Tea University Club. All rights reserved.</p>
            <p className="text-lg">
                Contact:{' '}
                <a
                    href="mailto:info@thoughtsand.teaguild.dev"
                    className="underline hover:text-tea-brown transition duration-300"
                >
                    info@thoughtsand.teaguild.dev
                </a>
            </p>
        </div>
    </footer>
);

export default Footer;