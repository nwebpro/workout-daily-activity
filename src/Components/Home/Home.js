import React from 'react';
import Activities from '../Activities/Activities';

const Home = () => {
    return (
        <div>
            <div className='container mx-auto px-4 md:px-0 my-10'>
                <div className="flex flex-col-reverse md:flex-row gap-5">
                    <div className='w-full md:w-3/4'>
                        <Activities />
                    </div>
                    <div className='w-full md:w-3/12 px-2  relative'>
                        <h3 className='text-2xl'>Ab Naeem</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;