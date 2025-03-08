import React from 'react';
import {Clock, MapPin, MessageCircle} from "lucide-react";
import {SiTelegram} from "@icons-pack/react-simple-icons";

const ContactCard = ({Icon, title, children}) => (
    <div className="bg-arts-gold bg-opacity-20 p-6 rounded-lg">
        <div className="flex items-center mb-4">
            <Icon size={24} className="text-arts-white mr-3 flex-shrink-0"/>
            <h3 className="text-xl font-bold text-arts-white">{title}</h3>
        </div>
        <div className="text-arts-white">
            {children}
        </div>
    </div>
);

const TelegramLink = ({href, children}) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer external"
        className="flex items-center text-arts-white hover:text-arts-gold transition-colors duration-300"
    >
        <SiTelegram size={20} className="mr-2"/>
        {children}
    </a>
);

const JoinUs = () => (
    <section id="join-us" className="py-16 bg-arts-blue text-arts-white">
        <div className="container mx-auto px-4">
            <h2 className="section-title text-arts-white">Join Our Circle</h2>
            <div className="max-w-3xl mx-auto">
                <p className="mb-8 text-xl text-center">
                    Become part of our vibrant community of artists, scientists, and thinkers. Experience creativity, intellectual 
                    discourse, and the art of tea in a welcoming environment.
                </p>
                <div className="bg-arts-white text-arts-black p-8 shadow-2xl mb-8">
                    <h3 className="text-2xl font-bold mb-6 text-arts-purple">How to Join</h3>
                    <ol className="list-decimal list-inside space-y-4 text-lg">
                        <li>Sign up in the <a
                            href="https://jacobsuniversity.sharepoint.com/sites/StudentClubs/SitePages/Join%20as%20a%20club%20member.aspx"
                            target="_blank"
                            rel="external noreferrer"
                            className="underline hover:text-arts-purple transition duration-300">official
                            member list</a> (Constructor University account needed)
                        </li>
                        <li>Complete our <a href="https://forms.gle/kPYntJ94mKHbZJJKA"
                                            target="_blank"
                                            rel="external noreferrer"
                                            className="underline hover:text-arts-purple transition duration-300"
                        >survey of members</a> and join our chats for all announcements
                        </li>
                        <li>Expect to pay the semester membership fee (12 &euro;)</li>
                    </ol>
                </div>
            </div>
        </div>

        <div className="container mx-auto px-4">
            <h2 className="section-title text-4xl text-arts-white font-serif mb-12">Contacts</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ContactCard Icon={MapPin} title="Our Meeting Place">
                    <p className="mb-4">
                        <span className="font-semibold">Student Activity Center, 3rd floor, Room 301</span><br/>
                        Constructor University Bremen gGmbH<br/>
                        Campus Ring 1, 28759 Bremen<br/>
                        Germany
                    </p>
                </ContactCard>

                <ContactCard Icon={MessageCircle} title="Telegram Chats">
                    <div className="space-y-4">
                        <TelegramLink href="https://t.me/+I5iu1QtYnjpmNWRi">
                            English
                        </TelegramLink>
                        <TelegramLink href="https://t.me/+DmEkAPuQ0fkyNDEy">
                            Russian
                        </TelegramLink>
                    </div>
                </ContactCard>

                <ContactCard Icon={Clock} title="Opening Hours">
                    <div className="space-y-2">
                        <p>
                            <span className="font-semibold">Regular Meeting Time:</span><br/>
                            Monday &mdash; Friday: 19:00 &mdash; 21:00<br/>
                            Club members only
                        </p>
                        <p>
                            <span className="font-semibold">Event Times:</span><br/>
                            See our events calendar for special gatherings
                        </p>
                    </div>
                </ContactCard>
            </div>
        </div>
    </section>
);

export default JoinUs;
