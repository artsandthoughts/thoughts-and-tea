import React from 'react';
import {SiInstagram, SiLinkedin, SiTelegram, SiWechat, SiX} from '@icons-pack/react-simple-icons';
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
                    <SiInstagram size={24} />
                </a>
            )}
            {socialLinks.x && (
                <a href={socialLinks.x} target="_blank" rel="noopener noreferrer" className="text-tea-brown hover:text-tea-red">
                    <SiX size={24} />
                </a>
            )}
            {socialLinks.linkedin && (
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-tea-brown hover:text-tea-red">
                    <SiLinkedin size={24} />
                </a>
            )}
            {socialLinks.telegram && (
                <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer" className="text-tea-brown hover:text-tea-red">
                    <SiTelegram size={24} />
                </a>
            )}
            {socialLinks.wechat && (
                <a href={socialLinks.wechat} target="_blank" rel="noopener noreferrer" className="text-tea-brown hover:text-tea-red">
                    <SiWechat size={24} />
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
                        x: "https://x.com/Sol_Astri",
                        linkedin: "https://www.linkedin.com/in/daniil-gorlov/",
                        telegram: "https://t.me/SolAstr"
                    }}
                />
                <TeamMember
                    name="Iaroslav Postovalov"
                    role="VP & Chief Tea Officer"
                    bio="Iaroslav brings years of experience in traditional tea ceremonies and a deep understanding of tea varieties, technology, and history. His enthusiasm for connecting people with this rich tradition make our meetings truly special."
                    photo={YariloPic}
                    socialLinks={{
                        x: "https://x.com/CMDR_Tvis",
                        linkedin: "https://www.linkedin.com/in/iaroslav-postovalov/",
                        telegram: "https://t.me/commandertvis",
                        wechat: "weixin://dl/chat?commandertvis"
                    }}
                />
                <TeamMember
                    name="Petr Borovlev"
                    role="Tea Master & Sourcing Specialist"
                    bio="Petr's expertise in sourcing rare and high&#8209;quality teas ensures our members experience the best."
                    photo={PetyaPic}
                    socialLinks={{
                        x: "https://twitter.com/petrborovlev",
                        linkedin: "https://linkedin.com/in/petrborovlev",
                        telegram: "https://t.me/petyb"
                    }}
                />
            </div>

            <h2 className="section-title text-tea-white mb-16">Club Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <EventPhoto
                    src={CampusGreenImage}
                    alt="Outdoor tea ceremony"
                    description="We often hold tea ceremonies outdoors, such as on Campus Green"
                />
                <EventPhoto
                    src={TeaSelectionImage}
                    alt="Tea tasting event"
                    description="Ānjí bái (安吉白) tea leaves opened up beautifully after brewing at our ceremony"
                />
            </div>

            <div className="bg-tea-green p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">More Than Just Tea</h3>
                <p className="text-lg mb-4">
                    At Thoughts and Tea, we're not just about drinking tea &mdash; we're about creating a cultural phenomenon. Our club is a space for intellectual discourse, cultural appreciation, and personal growth.
                </p>
                <p className="text-lg">
                    From our regular gōngfū chá sessions to our thought&#8209;provoking discussions, we're building a community that values mindfulness, diversity, and the rich traditions of tea culture.
                </p>
            </div>
        </div>
    </section>
);

export default TeaMasters;
