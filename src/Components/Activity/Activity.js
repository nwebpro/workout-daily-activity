import React from 'react';

const Activity = ({activity, addToList}) => {
    const {name, img, time, description, age} = activity;
    return (
        <section className="flex flex-col justify-center antialiased bg-gray-50 text-gray-600">
            <div className="h-full">
                <div className="flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden">
                    <a className="block focus:outline-none focus-visible:ring-2" href="#0">
                        <figure className="relative h-0 pb-[56.25%] overflow-hidden">
                            <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={img} width="320" height="180" alt="Course" />
                        </figure>
                    </a>
                    <div className="flex-grow flex flex-col p-5">
                        <div className='mb-3'>
                            <span className='border border-red-500 text-white bg-red-500 px-3 py-1 rounded-full text-[10px] tracking-wide2'>
                                Age: {age}
                            </span>
                            <span className='border border-red-500 text-white bg-red-500 px-3 py-1 rounded-full text-[10px] tracking-wide ml-2'>
                                Time: {time}m
                            </span>
                        </div>
                        <div className="flex-grow">
                            <header className="mb-3">
                                <a className="block focus:outline-none focus-visible:ring-2" href="#0">
                                    <h3 className="text-[22px] text-gray-900 font-extrabold leading-snug">{name}</h3>
                                </a>
                            </header>
                            <p>{description ? description.slice(0, 99) + '...' : 'No data found!'}</p>
                        </div>
                        <div className="flex space-x-2">
                            <button onClick={() => addToList(activity)} className="mt-4 px-4 py-2 bg-purple-500 hover:bg-purple-600 transition hover:transition text-white text-sm font-medium rounded-md w-full">
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