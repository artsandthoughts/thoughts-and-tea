import React from 'react';
import { Book, Film, Coffee, Music, Mic, Brain, Lightbulb, Globe } from 'lucide-react';
import PoetCandle from './images/poet_candle.png';

const EventTypeCard = ({ Icon, title, description }) => (
    <div className="flex items-center bg-tea-brown bg-opacity-20 p-4 rounded-lg mb-2">
        <Icon size={32} className="mr-4 text-tea-white flex-shrink-0" />
        <div>
            <h3 className="text-xl font-bold text-tea-white mb-2">{title}</h3>
            <p className="text-tea-white">{description}</p>
        </div>
    </div>
);

const Events = () => (
    <section id="events" className="py-20 bg-tea-green text-tea-white">
        <div className="container mx-auto px-4">
            <h2 className="section-title text-5xl text-tea-white font-serif mb-8">Thoughtful Events</h2>
            <div className="flex flex-col md:flex-row items-start justify-between">
                <div className="md:w-5/12">
                    <img src={PoetCandle} alt="Literary Evening at Thoughts and Tea"
                         className="w-full h-auto object-cover shadow-2xl mb-6"/>
                    <div className="bg-tea-brown bg-opacity-10 p-6">
                        <h3 className="text-2xl font-serif mb-4">Featured Event: Poetic Brew</h3>
                        <p className="mb-4">
                            Our monthly literary gathering where tea and verses intertwine. Here's what to expect:
                        </p>
                        <ul className="list-disc list-inside space-y-2 mb-4">
                            <li>Candlelit ambiance for an intimate atmosphere</li>
                            <li>A curated selection of teas to complement the mood</li>
                            <li>Open mic for sharing poetry in any language</li>
                            <li>Thoughtful discussions on literary themes and techniques</li>
                        </ul>
                        <p className="text-sm italic">
                            "Last month, we explored haikus while sipping on rare Gyokuro. The interplay of concise
                            Japanese poetry and the umami-rich tea led to fascinating insights into the art of
                            minimalism." - Sol Astri, Event Coordinator
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <p className="mb-8 text-xl leading-relaxed">
                        At Thoughts and Tea, we believe that the ritual of tea drinking is the perfect backdrop for
                        intellectual growth and cultural exchange. Our events are carefully crafted to stimulate both
                        the mind and the palate, creating a unique space where ideas flow as freely as our carefully
                        selected teas.
                    </p>
                    <h3 className="text-2xl font-serif mb-4">The Essence of Our Gatherings</h3>
                    <p className="mb-8 text-lg">
                        Each event type is designed to foster a specific aspect of personal and communal growth, all
                        while enjoying the finest teas:
                    </p>
                    <div className="space-y-6 mb-8">
                        <EventTypeCard
                            Icon={Coffee}
                            title="Gōngfū Chá Ceremonies"
                            description="Our flagship events where the art of Chinese tea ceremony meets intellectual discourse."
                        />
                        <EventTypeCard
                            Icon={Book}
                            title="Literary Evenings: Poetic Brew"
                            description="Share beloved poems or original works in a candlelit atmosphere, fostering literary appreciation across cultures."
                        />
                        <EventTypeCard
                            Icon={Film}
                            title="Anime Marathons: Eastern Reflections"
                            description="Explore themes in Japanese animation, discussing cultural nuances over traditional green teas."
                        />
                        <EventTypeCard
                            Icon={Mic}
                            title="Tea House Debates"
                            description="Engage in structured debates on contemporary issues, with tea serving as a calming influence for heated discussions."
                        />
                    </div>
                    <h3 className="text-2xl font-serif mb-4">Why Our Events Matter</h3>
                    <p className="mb-6 text-lg">
                        In the fast-paced university environment, our events offer:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-8 text-lg">
                        <li>A sanctuary for mindful interaction and reflection</li>
                        <li>Opportunities to explore diverse perspectives and cultures</li>
                        <li>A unique blend of sensory and intellectual stimulation</li>
                        <li>A chance to build meaningful connections beyond academic boundaries</li>
                    </ul>
                    <p className="text-lg italic mb-8">
                        "In the steam of a tea cup, we find the clarity to see the world anew and the warmth to embrace
                        diverse thoughts."
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default Events;