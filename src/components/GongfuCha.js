import React from 'react';
import { LeafyGreen, Thermometer, Droplet, Award, Clock, Users, Coffee } from 'lucide-react';
import GongFuChaPic from './images/gft.jpg';

const TeaPrinciple = ({ number, title, description }) => (
    <div className="flex flex-col items-center text-center p-4">
        <div className="w-16 h-16 rounded-full border-2 border-arts-accent flex items-center justify-center mb-4 text-arts-accent text-xl font-serif relative shadow-subtle bg-arts-white">
            {number}
            <div className="absolute inset-0 border border-arts-light rounded-full -m-1 -z-10 opacity-40"></div>
        </div>
        <h4 className="text-lg font-bold text-arts-dark mb-2">{title}</h4>
        <p className="text-arts-medium text-sm">{description}</p>
    </div>
);

const TeaType = ({ name, origin, characteristics }) => (
    <div className="p-4 border-b border-arts-light last:border-b-0 hover:bg-arts-light/10 transition-colors duration-300">
        <h4 className="font-medium text-arts-dark mb-1">{name}</h4>
        <p className="text-sm text-arts-medium">
            <span className="accent-text">Origin:</span> {origin}
        </p>
        <p className="text-sm text-arts-medium">
            <span className="accent-text">Character:</span> {characteristics}
        </p>
    </div>
);

const TeaCeremony = () => (
    <section id="gōngfū-chá" className="py-16 bg-arts-white">
        <div className="container mx-auto">
            <h2 className="section-title mb-12">Gōngfū Chá</h2>
            
            <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
                <div className="md:w-1/2 lg:w-5/12">
                    <div className="rounded-lg overflow-hidden border border-arts-light shadow-subtle">
                        <img 
                            src={GongFuChaPic} 
                            alt="Gōngfū chá ceremony" 
                            className="w-full h-auto object-cover" 
                        />
                    </div>
                </div>

                <div className="md:w-1/2 lg:w-7/12">
                    <div className="mt-6 p-4 border-l-2 border-arts-accent">
                        <div className="flex items-center mb-2">
                            <span className="text-2xl font-serif text-arts-accent mr-2">功夫茶</span>
                            <p className="text-arts-medium text-sm italic">
                                (gōng fū chá) — tea with great skill
                            </p>
                        </div>
                        <p className="text-arts-medium text-sm">
                            A traditional Chinese tea ceremony that emphasizes the ritualistic preparation
                            of tea, creating a meditative experience.
                        </p>
                    </div>

                    <p className="text-xl leading-relaxed text-arts-medium mb-6">
                        More than just a beverage, tea is a cultural practice embodying mindfulness, precision,
                        and appreciation.
                    </p>

                    <p className="text-arts-medium leading-relaxed mb-6">
                        At Arts & Thoughts, we celebrate the time-honored tradition of tea preparation. The
                        ritualistic approach known as gōngfū chá remains at the heart of our community gatherings.
                    </p>

                    <p className="text-arts-medium leading-relaxed">
                        Each aspect of the ceremony—from water temperature to pouring technique—is performed
                        with mindfulness and respect. This careful attention creates a meditative experience
                        that connects participants to centuries of tradition while fostering present-moment
                        awareness and community.
                    </p>
                </div>
            </div>

            <div className="divider"></div>

            <h3 className="text-2xl font-bold text-arts-dark mb-10">The Six Elements of Tea</h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
                <TeaPrinciple
                    number="1"
                    title="Water"
                    description="Pure water at precisely the right temperature for each tea variety"
                />
                <TeaPrinciple
                    number="2"
                    title="Leaves"
                    description="High-quality whole tea leaves from respected growing regions"
                />
                <TeaPrinciple
                    number="3"
                    title="Vessel" 
                    description="Proper teaware that respects tradition and enhances flavor"
                />
                <TeaPrinciple 
                    number="4" 
                    title="Method" 
                    description="Attentive preparation following time-honored techniques"
                />
                <TeaPrinciple 
                    number="5" 
                    title="Time" 
                    description="Patience in steeping, pouring, and savoring each infusion"
                />
                <TeaPrinciple 
                    number="6" 
                    title="Company" 
                    description="Shared experience that creates connection and community"
                />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
                <div className="md:col-span-3">
                    <h3 className="text-2xl font-bold text-arts-dark mb-6">Our Tea Collection</h3>
                    <div className="bg-arts-white border border-arts-light rounded-lg overflow-hidden shadow-subtle">
                        <TeaType 
                            name="Long Jing (Dragon Well)" 
                            origin="Hangzhou, China" 
                            characteristics="Flat green tea with chestnut notes and smooth finish"
                        />
                        <TeaType 
                            name="Da Hong Pao (Big Red Robe)" 
                            origin="Wuyi Mountains, China" 
                            characteristics="Rich oolong with mineral notes and sweet aftertaste"
                        />
                        <TeaType 
                            name="Silver Needle" 
                            origin="Fujian, China" 
                            characteristics="Delicate white tea with subtle sweetness"
                        />
                        <TeaType 
                            name="Lao Shu Puerh" 
                            origin="Yunnan, China" 
                            characteristics="Aged dark tea with earthy, complex flavor profile"
                        />
                    </div>
                </div>
                
                <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-arts-dark mb-6">Weekly Ceremonies</h3>
                    <div className="bg-arts-white p-6 rounded-lg border border-arts-light shadow-subtle h-full flex flex-col">
                        <div className="flex items-center mb-4 text-arts-accent">
                            <Clock size={20} className="mr-2" />
                            <p className="font-medium">Wednesday & Friday, 19:00–21:00</p>
                        </div>
                        
                        <p className="text-arts-medium mb-auto">
                            Experience the meditative practice of gōngfū chá in our regular ceremonies. 
                            Learn traditional techniques, taste exceptional teas, and connect with others
                            in a calm, mindful space.
                        </p>
                        
                        <div className="mt-6 pt-4 border-t border-arts-light">
                            <p className="text-arts-dark text-sm">
                                Open to all members. Tea and teaware provided.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default TeaCeremony;