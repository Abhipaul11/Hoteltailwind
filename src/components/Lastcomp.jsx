import React from 'react';
import { Link } from 'react-router-dom';

export default function Lastcomp() {
    return (
        <>
            <div className="max-w-[1350px] w-[90%]" style={{ margin: "4rem auto" }}>
                <div className="w-full max-w-[1350px] flex flex-col md:flex-row gap-8 rounded-xl">

                    <div className="flex flex-col justify-between flex-1 gap-4">
                        {[
                            {
                                icon: '🏊‍♀️',
                                title: 'Bonfire',
                                desc: 'Relax and enjoy the warm bonfire with friends, share stories, and create unforgettable evening memories together.'
                            },
                            {
                                icon: '🌱',
                                title: 'Nature View',
                                desc: 'Bask in serene greenery, breathe fresh mountain air, and experience complete peace surrounded by nature’s beauty.'
                            },
                            {
                                icon: '🍴',
                                title: 'Top Foods',
                                desc: 'Enjoy delicious meals including breakfast, lunch, and dinner, prepared with care to make your stay delightful.'
                            },
                            {
                                icon: '💼',
                                title: 'Best Conference Hall',
                                desc: 'Host professional meetings or events in our spacious conference hall with modern amenities and refreshing views.'
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="flex items-start bg-white rounded-xl shadow-md gap-4 p-4"
                            >
                                <span className="text-2xl">{item.icon}</span>
                                <div>
                                    <h3 className="font-semibold text-lg">{item.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Image */}
                    <div className="flex-1">
                        <img
                            src="https://cdn.pixabay.com/photo/2022/08/25/20/34/river-7411236_1280.jpg"
                            alt="Nature View"
                            className="w-full h-full object-cover rounded-xl shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
