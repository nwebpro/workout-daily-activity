import React from 'react';
import Activities from '../Activities/Activities';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';

const Home = () => {
    return (
        <section>
            <div className='container mx-auto px-4 md:px-0 py-10'>
                <div className="flex flex-col-reverse md:flex-row gap-5">
                    <div className='w-full md:w-3/4'>
                        <Header />
                        <Activities />
                    </div>
                    <div className='w-full md:w-3/12 px-2  relative'>
                        <h3 className='text-2xl'>
                            <Profile />
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;