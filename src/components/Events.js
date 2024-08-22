import React from 'react';
import { Clock, MapPin } from 'lucide-react';

const EventCard = ({ title, description, time, location }) => (
    <div className="card">
        <h3 className="text-2xl font-bold mb-4 text-tea-green">{title}</h3>
        <p className="mb-4 text-tea-black">{description}</p>
        <div className="flex items-center text-sm text-tea-brown mb-2">
            <Clock size={16} className="mr-2" />
            <p>{time}</p>
        </div>
        <div className="flex items-center text-sm text-tea-brown">
            <MapPin size={16} className="mr-2" />
            <p>{location}</p>
        </div>
    </div>
);

const Events = () => (
    <section id="events" className="py-20 bg-tea-black text-tea-white">
        <div className="container mx-auto px-4">
            <h2 className="section-title text-tea-white">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <EventCard
                    title="Tea & Thoughts: Weekly Gathering"
                    description="Join us for gōngfū chá and thought-provoking discussions every Thursday."
                    time="7:00 PM&ndash;9:00 PM"
                    location="Student Center, Room 101"
                />
                <EventCard
                    title="Cultural Tea Exchange"
                    description="Experience tea traditions from around the world."
                    time="3:00 PM&ndash;5:00 PM"
                    location="International Student Lounge"
                />
            </div>
        </div>
    </section>
);

export default Events;