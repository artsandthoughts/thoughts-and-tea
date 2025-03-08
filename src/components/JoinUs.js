import React from 'react';
import {Clock, MapPin, MessageCircle, ChevronRight} from "lucide-react";
import {SiTelegram} from "@icons-pack/react-simple-icons";

const ContactCard = ({Icon, title, children}) => (
    <div className="bg-arts-white border border-arts-light shadow-subtle p-6">
        <div className="flex items-start mb-4">
            <div className="bg-arts-light/70 p-3 rounded-full mr-4">
                <Icon size={22} className="text-arts-accent"/>
            </div>
            <div>
                <h3 className="text-xl font-bold text-arts-dark mb-1">{title}</h3>
                <div className="text-arts-medium">
                    {children}
                </div>
            </div>
        </div>
    </div>
);

const TelegramLink = ({href, children}) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer external"
        className="flex items-center text-arts-medium hover:text-arts-accent transition-colors duration-300 py-1"
    >
        <SiTelegram size={18} className="mr-2 text-arts-accent"/>
        <span>{children}</span>
    </a>
);

const StepItem = ({ number, title, children }) => (
    <div className="flex mb-8 last:mb-0">
        <div className="mr-6 flex-shrink-0">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-arts-accent text-arts-white font-bold text-lg">
                {number}
            </div>
        </div>
        <div>
            <h4 className="text-xl font-bold text-arts-dark mb-2">{title}</h4>
            <div className="text-arts-medium">
                {children}
            </div>
        </div>
    </div>
);

const ExternalLink = ({ href, children }) => (
    <a
        href={href}
        target="_blank"
        rel="external noreferrer"
        className="text-arts-accent hover:underline inline-flex items-center"
    >
        {children}
        <ChevronRight size={16} className="ml-1"/>
    </a>
);

const JoinUs = () => (
    <section id="join-us" className="py-20 bg-arts-light/50">
        <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
                <h2 className="section-title">Join Our Circle</h2>
                <p className="mb-12 text-xl text-arts-medium">
                    Become part of our vibrant community of artists, scientists, and thinkers. Experience creativity, intellectual 
                    discourse, and the art of tea in a welcoming environment.
                </p>

                <div className="bg-arts-white border border-arts-light shadow-subtle p-8 mb-16">
                    <h3 className="text-2xl font-bold mb-8 text-arts-dark brush-title inline-block">Membership Process</h3>
                    
                    <StepItem number="1" title="Sign Up">
                        <p className="mb-2">
                            Register in the official university club member list 
                            (Constructor University account required).
                        </p>
                        <ExternalLink href="https://jacobsuniversity.sharepoint.com/sites/StudentClubs/SitePages/Join%20as%20a%20club%20member.aspx">
                            Access the official member list
                        </ExternalLink>
                    </StepItem>

                    <StepItem number="2" title="Complete Our Survey">
                        <p className="mb-2">
                            Tell us about your interests and preferences so we can tailor your experience.
                        </p>
                        <ExternalLink href="https://forms.gle/kPYntJ94mKHbZJJKA">
                            Complete membership survey
                        </ExternalLink>
                    </StepItem>

                    <StepItem number="3" title="Join Our Channels">
                        <p className="mb-2">
                            Connect with us on Telegram to stay updated on all events and activities.
                        </p>
                        <div className="flex flex-col sm:flex-row sm:space-x-6">
                            <TelegramLink href="https://t.me/+I5iu1QtYnjpmNWRi">
                                English Channel
                            </TelegramLink>
                            <TelegramLink href="https://t.me/+DmEkAPuQ0fkyNDEy">
                                Russian Channel
                            </TelegramLink>
                        </div>
                    </StepItem>

                    <StepItem number="4" title="Pay Membership Fee">
                        <p>
                            The semester membership fee (12 €) covers tea, materials, and event costs.
                            Payment details will be shared after registration.
                        </p>
                    </StepItem>
                </div>
            </div>

            <div className="max-w-6xl mx-auto">
                <h2 className="section-title mb-12">Contact Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ContactCard Icon={MapPin} title="Our Meeting Place">
                        <p className="mb-2">
                            <span className="font-medium">Student Activity Center</span><br/>
                            3rd floor, Room 301<br/>
                            Constructor University Bremen<br/>
                            Campus Ring 1, 28759 Bremen<br/>
                            Germany
                        </p>
                    </ContactCard>

                    <ContactCard Icon={Clock} title="Opening Hours">
                        <div className="space-y-3">
                            <p>
                                <span className="font-medium">Regular Meetings:</span><br/>
                                Monday — Friday<br/>
                                19:00 — 21:00<br/>
                                <span className="text-sm italic">Members only</span>
                            </p>
                            <div className="h-px w-full bg-arts-light/70"></div>
                            <p>
                                <span className="font-medium">Special Events:</span><br/>
                                See our calendar for details
                            </p>
                        </div>
                    </ContactCard>

                    <ContactCard Icon={MessageCircle} title="Get in Touch">
                        <p className="mb-3">
                            For inquiries about membership or events, please email:
                        </p>
                        <a href="mailto:me@danielsol.dev" 
                           className="text-arts-accent hover:underline">
                            me@danielsol.dev
                        </a>
                    </ContactCard>
                </div>
            </div>
        </div>
    </section>
);

export default JoinUs;
