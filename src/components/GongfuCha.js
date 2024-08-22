import React from 'react';
import { LeafyGreen, Thermometer, Droplet, Award } from 'lucide-react';
import GongFuChaPic from './images/gft.jpg';

const FeatureItem = ({ Icon, text }) => (
    <div className="flex items-center bg-tea-brown bg-opacity-20 p-6 rounded-none">
        <Icon size={32} className="mr-4 text-tea-red" />
        <span className="text-lg">{text}</span>
    </div>
);

const GongfuCha = () => (
    <section id="gōngfū-chá" className="py-20">
        <div className="container mx-auto px-4">
            <h2 className="section-title">Gōngfū Chá: The Art of Tea</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <p className="mb-8 text-xl">
                        At Thoughts and Tea, we specialize in gōngfū chá, the time-honored Chinese tea ceremony. This meticulous and meditative practice involves:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FeatureItem Icon={LeafyGreen} text="Premium tea leaves" />
                        <FeatureItem Icon={Thermometer} text="Precise temperature" />
                        <FeatureItem Icon={Droplet} text="Multiple infusions" />
                        <FeatureItem Icon={Award} text="Traditional techniques" />
                    </div>
                </div>
                <div className="md:w-1/3">
                    <img src={GongFuChaPic} alt="Gōngfū chá ceremony" className="w-full h-auto object-cover shadow-2xl" />
                </div>
            </div>
        </div>
    </section>
);

export default GongfuCha;