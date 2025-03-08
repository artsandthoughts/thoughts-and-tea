import React from 'react';
import { Book, Film, Coffee, Mic, Globe, BookOpenText, Calendar } from 'lucide-react';
import PoetCandle from './images/poet_candle_2.jpg';

const EventCard = ({ date, title, time, description, featured = false }) => (
    <div className={`border ${featured ? 'border-arts-accent' : 'border-arts-light'} bg-arts-white shadow-subtle transition-all duration-300 hover:shadow-elevate h-full flex flex-col rounded-lg`}>
        <div className={`${featured ? 'bg-arts-accent/10' : 'bg-arts-light/30'} p-3 border-b ${featured ? 'border-arts-accent/30' : 'border-arts-light'} flex items-center rounded-t-lg`}>
            <div className="circle-accent w-8 h-8 mr-3 bg-arts-white">
                <Calendar size={16} className={`${featured ? 'text-arts-accent' : 'text-arts-medium'}`} />
            </div>
            <span className={`text-sm font-medium ${featured ? 'text-arts-accent' : 'text-arts-medium'}`}>{date}</span>
        </div>
        <div className="p-5 flex-grow flex flex-col">
            <h3 className="text-lg font-bold text-arts-dark mb-2">{title}</h3>
            <p className="text-arts-medium text-sm mb-3">{time}</p>
            <p className="text-arts-medium text-sm leading-relaxed">{description}</p>
        </div>
        {featured && (
            <div className="absolute top-0 right-0 w-3 h-3 bg-arts-accent rounded-full -mt-1 -mr-1"></div>
        )}
    </div>
);

const EventCategory = ({ Icon, title, description }) => (
    <div className="border border-arts-light bg-arts-white p-5 flex gap-4 items-start rounded-lg shadow-subtle hover:shadow-elevate transition-all duration-300">
        <div className="circle-accent w-10 h-10 bg-arts-light/50 flex-shrink-0">
            <Icon size={18} className="text-arts-accent" />
        </div>
        <div>
            <h3 className="text-lg font-bold text-arts-dark mb-1">{title}</h3>
            <p className="text-sm text-arts-medium leading-relaxed">{description}</p>
        </div>
    </div>
);

const FeaturedEventSection = () => (
    <div className="border border-arts-light bg-arts-white shadow-subtle overflow-hidden rounded-lg">
        <div className="relative">
            <img 
                src={PoetCandle} 
                alt="Literary Evening at Arts & Thoughts" 
                className="w-full h-56 object-cover border-b border-arts-light" 
            />
            <div className="absolute top-4 left-4 bg-arts-accent text-arts-white px-3 py-1 text-sm font-medium rounded-full">
                Featured Event
            </div>
        </div>
        <div className="p-6">
            <h3 className="text-2xl font-bold text-arts-dark mb-4 brush-title">Poetic Brew</h3>
            <div className="flex items-center gap-2 text-arts-medium text-sm mb-5">
                <Calendar size={16} />
                <span>Friday, August 12 • <span className="accent-text">19:00–21:00</span></span>
            </div>
            <p className="text-arts-medium mb-6 leading-relaxed">
                Join our literary gathering where tea and verses intertwine. Experience poetry in 
                multiple languages, thoughtful discussions, and carefully selected teas in an 
                intimate, candlelit atmosphere.
            </p>
            <div className="border-t border-arts-light pt-5">
                <p className="text-sm italic text-arts-medium">
                    "Green tea leaves unfurl<br />
                    Whispered verses take flight here<br />
                    Minds steep in stillness."
                </p>
                <p className="accent-text text-sm mt-2">— Sol Astri, Event Coordinator</p>
            </div>
        </div>
    </div>
);

const Events = () => (
    <section id="events" className="py-20 bg-arts-white">
        <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="section-title inline-block">Events Calendar</h2>
                <p className="text-xl text-arts-medium mt-8">
                    Join us for thoughtfully crafted gatherings that blend tea culture with 
                    intellectual discourse and <span className="accent-text">artistic expression</span>.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                <div className="lg:col-span-1">
                    <FeaturedEventSection />
                </div>
                
                <div className="lg:col-span-2">
                    <div className="pb-4 mb-8 flex items-center">
                        <div className="circle-accent w-10 h-10 bg-arts-light/50 mr-4">
                            <Calendar size={20} className="text-arts-accent" />
                        </div>
                        <h3 className="text-2xl font-bold text-arts-dark brush-title inline-block">Upcoming Events</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <EventCard 
                            date="August 8, 2025"
                            title="Gōngfū Chá Ceremony"
                            time="Wednesday • 19:00–21:00"
                            description="Learn the art of Chinese tea preparation with our resident tea master. We'll explore Oolong teas from the Wuyi mountains."
                        />
                        <EventCard 
                            date="August 15, 2025"
                            title="Tea House Debates"
                            time="Thursday • 18:30–20:30"
                            description="Structured discussion on the ethics of artificial intelligence. Moderated debate with Silver Needle white tea service."
                            featured={true}
                        />
                        <EventCard 
                            date="August 20, 2025"
                            title="Study Session"
                            time="Monday • 15:00–18:00"
                            description="Collaborative study environment with focus-enhancing tea selections. Perfect for exam preparation."
                        />
                        <EventCard 
                            date="August 28, 2025"
                            title="Film Screening: 'Last Life in the Universe'"
                            time="Friday • 20:00–22:30"
                            description="Thai art film followed by discussion. Japanese sencha and Thai-inspired refreshments will be served."
                        />
                    </div>
                </div>
            </div>

            <div className="divider"></div>

            <div className="mt-16">
                <div className="mb-10">
                    <div className="flex items-center mb-6">
                        <div className="circle-accent w-10 h-10 bg-arts-light/50 mr-4">
                            <Coffee size={20} className="text-arts-accent" />
                        </div>
                        <h3 className="text-2xl font-bold text-arts-dark brush-title inline-block">Regular Event Series</h3>
                    </div>
                    <p className="text-arts-medium max-w-3xl">
                        Our recurring event series blend intellectual growth with the tea drinking ritual,
                        creating spaces where ideas and conversations flow as freely as our carefully selected teas.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <EventCategory
                        Icon={Coffee}
                        title="Gōngfū Chá Ceremonies"
                        description="Weekly traditional Chinese tea ceremonies emphasizing mindfulness, technique, and appreciation of fine teas."
                    />
                    <EventCategory
                        Icon={Book}
                        title="Poetic Brew"
                        description="Monthly literary gatherings featuring poetry readings, creative writing workshops, and themed tea selections."
                    />
                    <EventCategory
                        Icon={Film}
                        title="Arts & Cinema"
                        description="Bi-weekly screenings of international and art films, followed by thoughtful discussion and cultural teas."
                    />
                    <EventCategory
                        Icon={Mic}
                        title="Tea House Debates"
                        description="Structured debates on contemporary issues in a respectful environment, accompanied by carefully chosen teas."
                    />
                    <EventCategory
                        Icon={BookOpenText}
                        title="Focused Study Sessions"
                        description="Regular study-focused gatherings with concentration-enhancing teas and collaborative learning."
                    />
                    <EventCategory
                        Icon={Globe}
                        title="Global Tea Journeys"
                        description="Monthly exploration of diverse tea traditions from around the world, with cultural context and tasting notes."
                    />
                </div>
            </div>
        </div>
    </section>
);

export default Events;