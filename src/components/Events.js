import React from 'react';
import { Book, Film, Coffee, Mic, Globe, BookOpenText } from 'lucide-react';
import PoetCandle from './images/poet_candle_2.jpg';

const EventTypeCard = ({ Icon, title, description }) => (
    <div className="flex items-center bg-arts-gold bg-opacity-20 p-4 rounded-lg mb-2">
        <Icon size={24} className="mr-4 text-arts-white flex-shrink-0" />
        <div>
            <h3 className="text-lg font-bold text-arts-white mb-1">{title}</h3>
            <p className="text-sm text-arts-white">{description}</p>
        </div>
    </div>
);

const Events = () => (
    <section id="events" className="py-16 bg-arts-blue text-arts-white">
        <div className="container mx-auto px-4">
            <h2 className="section-title text-4xl text-arts-white font-serif mb-8">Club Events</h2>
            <div className="flex flex-col lg:flex-row items-start justify-between">
                <div className="lg:w-5/12 mb-8 lg:mb-0">
                    <img src={PoetCandle} alt="Literary Evening at Arts & Thoughts"
                         className="w-full h-auto object-cover shadow-2xl mb-6" />
                    <div className="bg-arts-gold bg-opacity-10 p-6">
                        <h3 className="text-2xl font-serif mb-4">Featured Event: Poetic Brew</h3>
                        <p className="mb-4">
                            Our literary gathering where tea and verses intertwine. Here's what to expect:
                        </p>
                        <ul className="list-disc list-inside space-y-2 mb-4">
                            <li>Soft lighting for a cozy, intimate vibe</li>
                            <li>A curated selection of teas to complement the mood</li>
                            <li>Open mic for sharing poetry in any language</li>
                            <li>Thoughtful discussions on literary themes and techniques</li>
                        </ul>
                        <p className="text-sm italic">
                            "Green tea leaves unfurl<br />
                            Whispered verses take flight here<br />
                            Minds steep in stillness."<br /> &mdash; Sol Astri, Event Coordinator
                        </p>
                    </div>
                </div>
                <div className="lg:w-1/2 lg:pl-8">
                    <p className="mb-6 text-lg leading-relaxed">
                        At Arts & Thoughts, we continue to embrace the tea drinking ritual as a perfect backdrop for
                        intellectual growth and creative expression. Our events are carefully moderated to stimulate
                        both the mind and the palate, creating a space where artistic ideas and scientific discussions flow as freely as our carefully
                        selected teas.
                    </p>
                    <h3 className="text-2xl font-serif mb-4">The Essence of Our Gatherings</h3>
                    <p className="mb-6 text-lg">
                        Each event type is designed to foster a specific aspect of personal and communal growth, all
                        while enjoying the finest teas:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <EventTypeCard
                            Icon={Coffee}
                            title="Gōngfū Chá Ceremonies"
                            description="Explore the art of Chinese tea ceremony and connect with others."
                        />
                        <EventTypeCard
                            Icon={Book}
                            title="Poetic Brew"
                            description="Share poems in a candlelit atmosphere, fostering literary appreciation."
                        />
                        <EventTypeCard
                            Icon={Film}
                            title="Film/TV Screenings"
                            description="Discuss cultural themes over traditional teas."
                        />
                        <EventTypeCard
                            Icon={Mic}
                            title="Tea House Debates"
                            description="Engage in structured debates on contemporary issues."
                        />
                        <EventTypeCard
                            Icon={BookOpenText}
                            title="Tea Study Sessions"
                            description="Focus on exam preparation with the perfect tea."
                        />
                        <EventTypeCard
                            Icon={Globe}
                            title="Global Tea Traditions"
                            description="Experience diverse tea cultures from around the world."
                        />
                    </div>
                    <h3 className="text-2xl font-serif mb-4">Why Our Events Matter</h3>
                    <p className="mb-4 text-lg">
                        In the fast-paced university environment, our events offer:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-lg">
                        <li>A quiet shelter for mindful interaction and self-reflection</li>
                        <li>Opportunities to learn from different backgrounds and experiences</li>
                        <li>A unique blend of aromatic, tactile and intellectual stimulation</li>
                        <li>A chance to build meaningful connections beyond academic boundaries</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

export default Events;