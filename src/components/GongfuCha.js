import React from 'react';
import { LeafyGreen, Thermometer, Droplet, Award, Clock, Users, Heart, Brain } from 'lucide-react';
import GongFuChaPic from './images/gft.jpg';

const FeatureItem = ({ Icon, text }) => (
    <div className="flex items-center bg-tea-brown bg-opacity-20 p-6 rounded-lg">
        <Icon size={32} className="mr-4 text-tea-red" />
        <span className="text-lg">{text}</span>
    </div>
);

const GongfuCha = () => (
    <section id="gōngfū-chá" className="py-20 bg-tea-light">
        <div className="container mx-auto px-4">
            <h2 className="section-title text-4xl font-serif mb-8">Gōngfū Chá: The Art of Tea</h2>
            <div className="flex flex-col md:flex-row items-start justify-between">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <p className="mb-8 text-xl leading-relaxed">
                        At Thoughts and Tea, we celebrate gōngfū chá as more than just a tea party &mdash; it's a
                        cultural phenomenon that embodies mindfulness, precision, and appreciation for the finer
                        things in life. This time&#8209;honored Chinese practice is at the heart of our club's philosophy.
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
                        <FeatureItem Icon={Heart} text="Mindful appreciation" />
                        <FeatureItem Icon={Brain} text="Sensory engagement" />
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
                    <div className="bg-tea-brown bg-opacity-10 p-6">
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

export default GongfuCha;