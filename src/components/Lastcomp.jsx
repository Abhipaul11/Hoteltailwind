import React from 'react';
import { Link } from 'react-router-dom';

export default function Lastcomp() {
    return (
        <>
            <div className="max-w-[900px] w-[90%] " style={{ margin: "4rem auto" }}>
                <div className='flex justify-between align-middle mb-2'>
                    <h2 className='text-xl' >Services</h2>
                    <Link to='/aboutpage'>  <button type="button" class="text-white font-medium rounded-2xl text-sm px-2 py-1 text-center inline-flex items-center dark:bg-green-700 dark:hover:bg-green-800 ">
                        See all
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button></Link>
                </div>
                <div className="w-full flex flex-col md:flex-row gap-8 rounded-xl ">

                    {/* Left Content */}
                    <div className="flex flex-col justify-between flex-1 gap-4">
                        {[
                            { icon: '🏊‍♀️', title: 'Bonfire', desc: 'Relax and enjoy the bonfire' },
                            { icon: '🌱', title: 'Nature View', desc: 'Bask in serene greenery and fresh air' },
                            { icon: '🍴', title: 'Top Foods', desc: 'Delicious meals: Breakfast, Lunch, and Dinner' },
                            { icon: '💼', title: 'Best Conference Hall', desc: 'Host your meetings with a cool view' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-start p-4 bg-white rounded-xl shadow-md gap-4" style={{ padding: "10px" }}>
                                <span className="text-2xl">{item.icon}</span>
                                <div>
                                    <h3 className="font-semibold text-lg">{item.title}</h3>
                                    <p className="text-gray-500 text-sm">{item.desc}</p>
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
