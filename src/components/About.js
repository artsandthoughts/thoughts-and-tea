import React from 'react';

const About = () => (
    <section id="about" className="py-20">
        <div className="container mx-auto px-4">
            <h2 className="section-title">About Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="card">
                    <h3 className="text-2xl font-bold mb-4 text-arts-purple">Our Mission</h3>
                    <p>To create a sanctuary for artists, scientists, and thinkers, fostering intellectual growth and creative expression through various art forms and the mindful appreciation of tea.</p>
                </div>
                <div className="card">
                    <h3 className="text-2xl font-bold mb-4 text-arts-purple">Our Vision</h3>
                    <p>To become the premier hub for artistic expression, intellectual discourse, and tea culture within our university and beyond.</p>
                </div>
                <div className="card">
                    <h3 className="text-2xl font-bold mb-4 text-arts-purple">Our Values</h3>
                    <ul className="list-none space-y-2">
                        <li>• Inclusivity and Diversity</li>
                        <li>• Intellectual Curiosity</li>
                        <li>• Creative Expression</li>
                        <li>• Cultural Appreciation</li>
                        <li>• Mindfulness and Reflection</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

export default About;