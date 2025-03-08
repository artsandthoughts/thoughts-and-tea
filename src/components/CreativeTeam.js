import React from 'react';
import {SiInstagram, SiLinkedin, SiTelegram, SiX, SiWechat} from '@icons-pack/react-simple-icons';
import CampusGreenImage from './images/campusgreen.jpg';
import TeaSelectionImage from './images/gft2.jpg'; // TODO: Replace with arts-related image
import SolPic from './images/sol.jpg';
import PetyaPic from './images/petya.jpg';

const TeamMember = ({name, role, bio, photo, socialLinks}) => (
    <div className="bg-arts-white border border-arts-light shadow-subtle transition-all duration-300 hover:shadow-elevate flex flex-col h-full">
        <div className="flex md:flex-row flex-col h-full">
            <div className="md:w-1/3 relative overflow-hidden border-r border-arts-light">
                <img 
                    src={photo} 
                    alt={name} 
                    className="h-64 w-full md:h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                />
            </div>
            <div className="md:w-2/3 p-8 flex flex-col">
                <div className="mb-5">
                    <h3 className="text-2xl font-bold text-arts-dark mb-2 brush-title">{name}</h3>
                    <p className="text-arts-medium font-medium italic">{role}</p>
                </div>
                <p className="mb-6 text-arts-dark leading-relaxed">{bio}</p>
                
                <div className="flex space-x-4 mt-auto pt-4 border-t border-arts-light">
                    {socialLinks.instagram && (
                        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer"
                        className="text-arts-medium hover:text-arts-accent transition-colors duration-300">
                            <SiInstagram size={20}/>
                        </a>
                    )}
                    {socialLinks.x && (
                        <a href={socialLinks.x} target="_blank" rel="noopener noreferrer"
                        className="text-arts-medium hover:text-arts-accent transition-colors duration-300">
                            <SiX size={20}/>
                        </a>
                    )}
                    {socialLinks.linkedin && (
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                        className="text-arts-medium hover:text-arts-accent transition-colors duration-300">
                            <SiLinkedin size={20}/>
                        </a>
                    )}
                    {socialLinks.telegram && (
                        <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer"
                        className="text-arts-medium hover:text-arts-accent transition-colors duration-300">
                            <SiTelegram size={20}/>
                        </a>
                    )}
                    {socialLinks.wechat && (
                        <a href={socialLinks.wechat} target="_blank" rel="noopener noreferrer"
                        className="text-arts-medium hover:text-arts-accent transition-colors duration-300">
                            <SiWechat size={20}/>
                        </a>
                    )}
                </div>
            </div>
        </div>
    </div>
);

const EventPhoto = ({src, alt, description}) => (
    <div className="bg-arts-white border border-arts-light shadow-subtle transition-all duration-300 hover:shadow-elevate h-full flex flex-col">
        <div className="overflow-hidden relative">
            <img 
                src={src} 
                alt={alt} 
                className="w-full h-64 object-cover transition-all duration-500 hover:scale-[1.02]"
            />
        </div>
        <div className="p-5 border-t border-arts-light flex-grow">
            <p className="text-sm text-arts-medium font-medium">{description}</p>
        </div>
    </div>
);

const CreativeTeam = () => (
    <section id="our-team" className="py-20 bg-arts-white">
        <div className="container mx-auto">
            <div className="mb-12">
                <h2 className="section-title">Our Team</h2>
                <p className="text-arts-medium mb-8 max-w-3xl">
                    Meet the people who bring together art, science, and tea in thoughtful harmony.
                </p>
            </div>
            
            <div className="grid grid-cols-1 gap-10 mb-16">
                <TeamMember
                    name="Sol Astri"
                    role="President & Creative Director"
                    bio="Sol is a talented organizer, a poet and a musician. He curates our events and ensures that every artistic gathering is a memorable experience for our members."
                    photo={SolPic}
                    socialLinks={{
                        x: "https://x.com/Sol_Astri",
                        linkedin: "https://www.linkedin.com/in/daniil-gorlov/",
                        telegram: "https://t.me/SolAstr"
                    }}
                />
                <TeamMember
                    name="Petr Borovlev"
                    role="Tea Master"
                    bio="Our shy tea apprentice who knows more dark tea secrets than he lets on."
                    photo={PetyaPic}
                    socialLinks={{
                        x: "https://twitter.com/petrborovlev",
                        linkedin: "https://linkedin.com/in/petrborovlev",
                        telegram: "https://t.me/petyb"
                    }}
                />
            </div>

            <div className="divider"></div>

            <div className="mb-12 mt-16">
                <h2 className="section-title">Club Activities</h2>
                <p className="text-arts-medium mb-8 max-w-3xl">
                    Explore the various events and gatherings we host throughout the academic year.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <EventPhoto
                    src={CampusGreenImage}
                    alt="Outdoor creative gathering"
                    description="We often hold gatherings outdoors, combining arts, sciences, and tea"
                />
                <EventPhoto
                    src={TeaSelectionImage}
                    alt="Creative workshop"
                    description="Students engaging in our weekly multidisciplinary creative sessions"
                />
            </div>

            <div className="divider"></div>

            <div className="bg-arts-light/50 p-8 border border-arts-light mt-16">
                <h3 className="text-2xl font-bold mb-8 text-arts-dark font-serif brush-title">
                    Arts, Science & Thoughts
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <p className="text-arts-dark leading-relaxed">
                        At Arts & Thoughts, we embrace the full spectrum of human creativity &mdash; from poetry and music to visual arts, 
                        photography, calligraphy, science, and technology. We believe in exploring the connections between disciplines
                        and celebrating both artistic and intellectual pursuits.
                    </p>
                    <p className="text-arts-dark leading-relaxed">
                        Our community brings together diverse talents and interests, creating a space where a poetry reading 
                        might lead to a discussion on quantum physics, followed by a tea ceremony. We value
                        creativity, curiosity, and the cross-pollination of ideas across traditional boundaries.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default CreativeTeam;
