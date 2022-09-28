import React from 'react';

const Activity = () => {
    return (
        <section className="flex flex-col justify-center antialiased bg-gray-50 text-gray-600">
            <div className="h-full">
                <div className="flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden">
                    <a className="block focus:outline-none focus-visible:ring-2" href="#0">
                        <figure className="relative h-0 pb-[56.25%] overflow-hidden">
                            <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src='https://ae01.alicdn.com/kf/H6a350f85241a4a6c9a39c075d82e875bW/100lbs-300lbs-Hand-Grip-Strengthener-Heavy-Grip-Trainer-Arm-Finger-Rehabilitation-Exercise-Power-Handgrip-Hand-Gripper.jpg_Q90.jpg_.webp' width="320" height="180" alt="Course" />
                        </figure>
                    </a>
                    <div className="flex-grow flex flex-col p-5">
                        <div className='mb-3'>
                            <span className='border border-red-500 text-white bg-red-500 uppercase px-3 py-1 rounded-full text-[10px] tracking-wide2'>
                                Age: 20 - 30
                            </span>
                            <span className='border border-red-500 text-white bg-red-500 uppercase px-3 py-1 rounded-full text-[10px] tracking-wide ml-2'>
                                Time: 02h
                            </span>
                        </div>
                        <div className="flex-grow">
                            <header className="mb-3">
                                <a className="block focus:outline-none focus-visible:ring-2" href="#0">
                                    <h3 className="text-[22px] text-gray-900 font-extrabold leading-snug">Hello</h3>
                                </a>
                            </header>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="flex space-x-2">
                            <button className="mt-4 px-4 py-2 bg-purple-500 hover:bg-purple-600 transition hover:transition text-white text-sm font-medium rounded-md w-full">
                                Add To List
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Activity;