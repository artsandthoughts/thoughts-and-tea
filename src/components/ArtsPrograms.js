import React from 'react';
import { Palette, Music, BookOpen, Camera, PenTool, Sparkles } from 'lucide-react';
import GongFuChaPic from './images/gft.jpg'; // TODO: Replace with arts-related image

const ArtDiscipline = ({ Icon, title, description }) => (
    <div className="border border-arts-light bg-arts-white shadow-subtle p-6 flex flex-col">
        <div className="flex items-center mb-4">
            <div className="p-3 bg-arts-light/50 rounded-full mr-3">
                <Icon size={22} className="text-arts-accent" />
            </div>
            <h4 className="text-lg font-bold text-arts-dark">{title}</h4>
        </div>
        <p className="text-arts-medium text-sm leading-relaxed">{description}</p>
    </div>
);

const ArtsPrograms = () => (
    <section id="arts" className="py-20 bg-arts-white">
        <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="section-title inline-block">Creative Expression</h2>
                <p className="text-xl text-arts-medium mt-8">
                    At Arts & Thoughts, we celebrate the power of artistic expression to inspire, 
                    challenge, and transform our understanding of the world.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="md:col-span-2 order-2 md:order-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <ArtDiscipline 
                            Icon={Palette} 
                            title="Visual Arts" 
                            description="Discover painting, drawing, and mixed media. Explore color theory, composition, and visual storytelling through hands-on workshops."
                        />
                        <ArtDiscipline 
                            Icon={Music} 
                            title="Music & Sound" 
                            description="Experience the power of sound through musical performances, listening sessions, and discussions about musical theory and composition."
                        />
                        <ArtDiscipline 
                            Icon={BookOpen} 
                            title="Literature & Poetry" 
                            description="Engage with words through poetry readings, creative writing workshops, and literary discussions that explore narrative and meaning."
                        />
                        <ArtDiscipline 
                            Icon={Camera} 
                            title="Photography" 
                            description="Capture moments and perspectives through photography workshops, focusing on composition, lighting, and visual storytelling."
                        />
                        <ArtDiscipline 
                            Icon={PenTool} 
                            title="Calligraphy" 
                            description="Learn the art of beautiful writing through Eastern and Western calligraphy traditions, exploring the meditative aspects of lettering."
                        />
                        <ArtDiscipline 
                            Icon={Sparkles} 
                            title="Interdisciplinary Arts" 
                            description="Explore the exciting intersections between different art forms, science, and technology in collaborative projects."
                        />
                    </div>
                </div>
                
                <div className="relative md:col-span-1 order-1 md:order-2 mb-8 md:mb-0 h-full flex flex-col">
                    <img 
                        src={GongFuChaPic} 
                        alt="Arts workshop" 
                        className="w-full h-72 object-cover border border-arts-light"
                    />
                    <div className="border border-arts-light bg-arts-white flex-grow p-6">
                        <h3 className="text-xl font-bold text-arts-dark mb-4 brush-title">Why Arts Matter</h3>
                        <p className="text-arts-medium mb-4 leading-relaxed">
                            The arts help us process complex emotions, challenge our perspectives,
                            and connect with others across cultural boundaries.
                        </p>
                        <p className="text-arts-medium leading-relaxed">
                            Through artistic expression, we develop critical thinking,
                            empathy, and the ability to communicate beyond words.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="bg-arts-light/30 border border-arts-light p-8">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-arts-dark mb-6 brush-title inline-block">Upcoming Arts Programs</h3>
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-arts-white border border-arts-light p-6">
                            <p className="text-arts-accent font-medium mb-2">Every Tuesday</p>
                            <h4 className="text-arts-dark font-bold mb-2">Poetry Reading Circle</h4>
                            <p className="text-arts-medium text-sm">Share and discuss poetry in an intimate setting, focusing on themes of nature and contemplation.</p>
                        </div>
                        <div className="bg-arts-white border border-arts-light p-6">
                            <p className="text-arts-accent font-medium mb-2">Monthly Workshop</p>
                            <h4 className="text-arts-dark font-bold mb-2">Visual Arts Studio</h4>
                            <p className="text-arts-medium text-sm">Hands-on art creation with changing monthly themes and techniques, suitable for all skill levels.</p>
                        </div>
                        <div className="bg-arts-white border border-arts-light p-6">
                            <p className="text-arts-accent font-medium mb-2">Special Event</p>
                            <h4 className="text-arts-dark font-bold mb-2">Art & Science Symposium</h4>
                            <p className="text-arts-medium text-sm">Exploring the intersections of artistic expression and scientific inquiry through presentations and dialogue.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default ArtsPrograms;