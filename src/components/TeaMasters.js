import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';
import CampusGreenImage from './images/campusgreen.jpg';
import TeaSelectionImage from './images/gft2.jpg';
import SolPic from './images/sol.jpg';
import YariloPic from './images/yarilo.jpg';
import PetyaPic from './images/petya.jpg';


const TeamMember = ({ name, role, bio, photo, socialLinks }) => (
    <div className="bg-tea-white p-6 shadow-xl">
        <img src={photo} alt={name} className="w-full object-cover mb-4" />
        <h3 className="text-2xl font-bold text-tea-red mb-2">{name}</h3>
        <p className="text-tea-green font-semibold mb-2">{role}</p>
        <p className="mb-4 text-tea-black">{bio}</p>
        <div className="flex space-x-4">
            {socialLinks.instagram && (
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-tea-brown hover:text-tea-red">
                    <Instagram size={24} />
                </a>
            )}
            {socialLinks.twitter && (
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-tea-brown hover:text-tea-red">
                    <Twitter size={24} />
                </a>
            )}
            {socialLinks.linkedin && (
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-tea-brown hover:text-tea-red">
                    <Linkedin size={24} />
                </a>
            )}
        </div>
    </div>
);

const EventPhoto = ({ src, alt, description }) => (
    <div className="bg-tea-white p-4 shadow-xl">
        <img src={src} alt={alt} className="w-full h-96 object-cover mb-4" />
        <p className="text-sm text-tea-green">{description}</p>
    </div>
);

const TeaMasters = () => (
    <section id="tea-masters" className="py-20 bg-tea-black text-tea-white">
        <div className="container mx-auto px-4">
            <h2 className="section-title text-tea-white mb-16">Our Tea Crew</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <TeamMember
                    name="Sol Astri"
                    role="President & Event Coordinator"
                    bio="Sol is a talented organizer, a poet and a musician. He curates our events and ensures that every gathering is a memorable experience for our members."
                    photo={SolPic}
                    socialLinks={{
                        instagram: "https://instagram.com/solastri",
                        twitter: "https://twitter.com/solastri",
                        linkedin: "https://linkedin.com/in/solastri"
                    }}
                />
                <TeamMember
                    name="Yaroslav Postavolov"
                    role="VP & Chief Tea Officer"
                    bio="Yaroslav brings years of experience in traditional tea ceremonies and deep knowledge of tea varieties, which make our events truly special."
                    photo={YariloPic}
                    socialLinks={{
                        instagram: "https://instagram.com/yaroslav",
                        linkedin: "https://www.linkedin.com/in/iaroslav-postovalov/"
                    }}
                />
                <TeamMember
                    name="Petr Borovlev"
                    role="Tea Master & Sourcing Specialist"
                    bio="Petr's expertise in sourcing rare and high-quality teas ensures our members experience the best."
                    photo={PetyaPic}
                    socialLinks={{
                        twitter: "https://twitter.com/petrborovlev",
                        linkedin: "https://linkedin.com/in/petrborovlev"
                    }}
                />
            </div>

            <h2 className="section-title text-tea-white mb-16">Club Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <EventPhoto
                    src={CampusGreenImage}
                    alt="Outdoor tea ceremony"
                    description="Our members enjoying a traditional tea ceremony on Campus Green"
                />
                <EventPhoto
                    src={TeaSelectionImage}
                    alt="Tea tasting event"
                    description="Exploring a variety of premium teas at our monthly tasting event"
                />
            </div>

            <div className="bg-tea-green p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">More Than Just Tea</h3>
                <p className="text-lg mb-4">
                    At Thoughts and Tea, we're not just about drinking tea – we're about creating a cultural phenomenon. Our club is a space for intellectual discourse, cultural appreciation, and personal growth.
                </p>
                <p className="text-lg">
                    From our regular gōngfū chá sessions to our thought-provoking discussions, we're building a community that values mindfulness, diversity, and the rich traditions of tea culture.
                </p>
            </div>
        </div>
    </section>
);

export default TeaMasters;