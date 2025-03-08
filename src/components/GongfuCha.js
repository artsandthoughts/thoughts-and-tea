import React from 'react';
import { LeafyGreen, Thermometer, Droplet, Award, Clock, Users } from 'lucide-react';
import GongFuChaPic from './images/gft.jpg';

const FeatureItem = ({ Icon, text }) => (
    <div className="flex items-center bg-arts-gold bg-opacity-20 p-6 rounded-lg">
        <Icon size={32} className="mr-4 text-arts-purple" />
        <span className="text-lg">{text}</span>
    </div>
);

const TeaCeremony = () => (
    <section id="gōngfū-chá" className="py-20 bg-arts-white">
        <div className="container mx-auto px-4">
            <h2 className="section-title text-4xl font-serif mb-8">Gōngfū Chá: The Art of Tea</h2>
            <div className="flex flex-col md:flex-row items-start justify-between">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <p className="mb-8 text-xl leading-relaxed">
                        At Arts & Thoughts, we continue to celebrate tea as more than just a beverage &mdash; it's a
                        cultural practice that embodies mindfulness, precision, and appreciation for the finer
                        things in life. The time&#8209;honored traditions of tea remain an integral part of our club's activities.
                    </p>
                    <h3 className="text-2xl font-serif mb-4">The Essence of Gōngfū Chá</h3>
                    <p className="mb-8 text-lg">
                        Gōngfū chá (功夫茶), which translates to "tea with great skill" or "tea with effort," is a meticulous
                        approach to tea preparation that emphasizes:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <FeatureItem Icon={LeafyGreen} text="Premium tea leaves" />
                        <FeatureItem Icon={Thermometer} text="Precise temperature" />
                        <FeatureItem Icon={Droplet} text="Sequential steeping" />
                        <FeatureItem Icon={Award} text="Traditional technique" />
                        <FeatureItem Icon={Clock} text="Patience and precision" />
                        <FeatureItem Icon={Users} text="Shared experience" />
                    </div>
                    <h3 className="text-2xl font-serif mb-4">Why Gōngfū Chá Matters</h3>
                       <p className="mb-6 text-lg">
                        In our fast-paced university life, gōngfū chá offers a chance to calm down and focus. It teaches us to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-8 text-lg">
                        <li>Appreciate the subtle nuances in flavor and aroma</li>
                        <li>Cultivate patience and attention to detail</li>
                        <li>Foster meaningful connections through shared experiences</li>
                    </ul>
                </div>
                <div className="md:w-5/12">
                    <img src={GongFuChaPic} alt="Gōngfū chá ceremony" className="w-full h-auto object-cover shadow-2xl mb-6" />
                    <div className="bg-arts-gold bg-opacity-10 p-6">
                        <h3 className="text-2xl font-serif mb-4">Experience Gōngfū Chá</h3>
                        <p className="mb-4">
                            Join us for our weekly tea ceremonies where you can:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Learn the intricacies of gōngfū chá</li>
                            <li>Taste a variety of premium teas</li>
                            <li>Practice mindfulness and reflection</li>
                            <li>Connect with fellow tea enthusiasts</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default TeaCeremony;