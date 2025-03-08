import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Events from './components/Events';
import ArtsPrograms from './components/ArtsPrograms';
import TeaCeremony from './components/GongfuCha';
import CreativeTeam from './components/CreativeTeam';
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
                <ArtsPrograms />
                <TeaCeremony />
                <CreativeTeam />
                <JoinUs />
            </main>
            <Footer />
        </div>
    );
};

export default App;