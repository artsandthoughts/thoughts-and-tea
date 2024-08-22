import React from 'react';

const About = () => (
    <section id="about" className="py-20">
        <div className="container mx-auto px-4">
            <h2 className="section-title">About Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="card">
                    <h3 className="text-2xl font-bold mb-4 text-tea-red">Our Mission</h3>
                    <p>To create a sanctuary for tea enthusiasts and thinkers, fostering intellectual growth through the art of tea.</p>
                </div>
                <div className="card">
                    <h3 className="text-2xl font-bold mb-4 text-tea-red">Our Vision</h3>
                    <p>To become the premier hub for tea culture and intellectual discourse within our university and beyond.</p>
                </div>
                <div className="card">
                    <h3 className="text-2xl font-bold mb-4 text-tea-red">Our Values</h3>
                    <ul className="list-none space-y-2">
                        <li>• Inclusivity and Diversity</li>
                        <li>• Intellectual Curiosity</li>
                        <li>• Cultural Appreciation</li>
                        <li>• Mindfulness and Reflection</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

export default About;