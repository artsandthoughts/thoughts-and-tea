import React from 'react';

const JoinUs = () => (
    <section id="join-us" className="py-20 bg-tea-green text-tea-white">
        <div className="container mx-auto px-4">
            <h2 className="section-title text-tea-white">Join Our Circle</h2>
            <div className="max-w-3xl mx-auto">
                <p className="mb-8 text-xl text-center">
                    Become part of our vibrant community of tea lovers and thinkers. Experience the art of tea and engage in stimulating conversations.
                </p>
                <div className="bg-tea-white text-tea-black p-8 shadow-2xl mb-8">
                    <h3 className="text-2xl font-bold mb-6 text-tea-red">How to Join</h3>
                    <ol className="list-decimal list-inside space-y-4 text-lg">
                        <li>Attend our next Tea & Thoughts gathering</li>
                        <li>Complete our membership form (available at events or online)</li>
                        <li>Pay the semester membership fee (20-40 euros, exact amount TBA)</li>
                    </ol>
                </div>
                <div className="text-center">
                    <button className="btn text-xl font-bold">
                        Sign Up for Updates
                    </button>
                </div>
            </div>
        </div>
    </section>
);

export default JoinUs;