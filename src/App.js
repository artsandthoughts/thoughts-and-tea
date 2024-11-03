import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Events from './components/Events';
import GongfuCha from './components/GongfuCha';
import TeaCrew from './components/TeaCrew';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';
import './index.css';

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="font-sans">
            <Header />
            <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <main>
                <About />
                <Events />
                <GongfuCha />
                <TeaCrew />
                <JoinUs />
            </main>
            <Footer />
        </div>
    );
};

export default App;