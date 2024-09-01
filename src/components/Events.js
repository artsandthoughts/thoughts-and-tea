import React from 'react';
import {Book, Film, Coffee, Mic, Globe, BookOpenText} from 'lucide-react';
import PoetCandle from './images/poet_candle.png';

const EventTypeCard = ({Icon, title, description}) => (
    <div className="flex items-center bg-tea-brown bg-opacity-20 p-4 rounded-lg mb-2">
        <Icon size={32} className="mr-4 text-tea-white flex-shrink-0"/>
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
                        {/*TODO NOT ONLY POETIC !!!!!!!!!*/}
                        <p className="mb-4">
                            Our literary gathering where tea and verses intertwine. Here's what to
                            expect:
                        </p>
                        <ul className="list-disc list-inside space-y-2 mb-4">
                            <li>Soft lighting for a cozy, intimate vibe</li>
                            <li>A curated selection of teas to complement the mood</li>
                            <li>Open mic for sharing poetry in any language</li>
                            <li>Thoughtful discussions on literary themes and techniques</li>
                        </ul>
                        <p className="text-sm italic">
                            "Green tea leaves unfurl<br/>
                            Whispered verses take flight here<br/>
                            Minds steep in stillness."<br/> &mdash; Sol Astri, Event Coordinator
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <p className="mb-8 text-xl leading-relaxed">
                        At Thoughts and Tea, we believe that the tea drinking ritual is the perfect backdrop for
                        intellectual growth and intercultural exchange. Our events are carefully moderated to stimulate
                        both
                        the mind and the palate, creating a space where ideas flow as freely as our carefully
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
                            description="Our flagship events where we explore the art of Chinese tea ceremony and get to know each other better."
                        />
                        <EventTypeCard
                            Icon={Book}
                            title="Poetic Brew"
                            description="Share beloved poems or original works in a candlelit atmosphere, fostering literary appreciation across cultures."
                        />
                        <EventTypeCard
                            Icon={Film}
                            title="Film/TV Screenings"
                            description="Explore themes in various media, discussing cultural nuances over traditional teas."
                        />
                        <EventTypeCard Icon={Mic}
                                       title="Tea House Debates"
                                       description="Engage in structured debates on contemporary issues, where tea makes discussions even more heated."/>
                        <EventTypeCard Icon={BookOpenText} title="Tea Study Sessions"
                            description="Get into the right flow for exam preparation, staying focused with tea."/>
                        <EventTypeCard Icon={Globe} title="Different Tea Traditions" description="From samovar to masala chai&mdash;we will be experimenting with many other cultures of tea drinking."/>
                    </div>
                    <h3 className="text-2xl font-serif mb-4">Why Our Events Matter</h3>
                    <p className="mb-6 text-lg">
                        In the fast-paced university environment, our events offer:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-8 text-lg">
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