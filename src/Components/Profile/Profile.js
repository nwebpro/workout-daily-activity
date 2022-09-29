import React, { useEffect, useState } from 'react';
import { addListLS, getStoredList } from '../Utilities/LocalStorage';
import Break from './Break';
import ExerciseDetails from './ExerciseDetails';
import Swal from 'sweetalert2';
import naeem from '../../images/naeem.jpg';

const Profile = ({addList}) => {
    const [breakTime, setBreakTime] = useState(0);
    const [getTime, setGetTime] = useState([]);
    
    const addBreakTime =  (time) => {
        addListLS(time);
        setBreakTime(time);
    }

    // Get Local Storage
    useEffect(() => {
        const getStore = getStoredList();
        setGetTime(getStore);
    }, [breakTime])

    const activityCompleted = () => {
        Swal.fire(`Congratulations!`, "Your Activity Completed!", "success");
    }

    return (
        <div>
            <section className="antialiased bg-gray-50 text-gray-600 p-2 mt-1 md:mt-12">
                <header className="pt-6 pb-4 px-5">
                    <div className="flex flex-wrap justify-between items-center mb-3">
                        <div className="flex items-center">
                            <a className="inline-flex items-start mr-3" href="#0">
                                <img className="rounded-full" src={naeem} width="48" height="48" alt="Ab Naeem" />
                            </a>
                            <div className="pr-1">
                                <a className="inline-flex text-gray-800 hover:text-gray-900" href="#0">
                                    <h2 className="text-xl leading-snug font-bold md:text-sm lg:text-lg">Ab Naeem</h2>
                                </a>
                                <a className="block text-sm font-medium text-purple-500" href="https://github.com/nwebpro">@nwebpro</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center sm:justify-start space-x-4">
                        <div className="flex items-center">
                            <svg className="w-4 h-4 fill-current flex-shrink-0 text-gray-400" viewBox="0 0 16 16">
                                <path d="M8 8.992a2 2 0 1 1-.002-3.998A2 2 0 0 1 8 8.992Zm-.7 6.694c-.1-.1-4.2-3.696-4.2-3.796C1.7 10.69 1 8.892 1 6.994 1 3.097 4.1 0 8 0s7 3.097 7 6.994c0 1.898-.7 3.697-2.1 4.996-.1.1-4.1 3.696-4.2 3.796-.4.3-1 .3-1.4-.1Zm-2.7-4.995L8 13.688l3.4-2.997c1-1 1.6-2.198 1.6-3.597 0-2.798-2.2-4.996-5-4.996S3 4.196 3 6.994c0 1.399.6 2.698 1.6 3.697 0-.1 0-.1 0 0Z" />
                            </svg>
                            <span className="text-sm ml-2">Mohammadpur, Dhaka</span>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-between items-center mt-10 bg-slate-200 px-5 py-3 rounded-xl'>
                        <div className='text-center  my-3'>
                            <h2 className='text-2xl text-black font-bold leading-none'>65<small className='text-slate-400 text-sm font-normal'>kg</small></h2>
                            <span className='text-lg md:text-sm'>Weight</span>
                        </div>
                        <div className='text-center  my-3'>
                            <h2 className='text-2xl text-black font-bold leading-none'>5.10</h2>
                            <span className='text-lg md:text-sm'>Height</span>
                        </div>
                        <div className='text-center my-3'>
                            <h2 className='text-2xl text-black font-bold leading-none'>23<small className='text-slate-400 text-sm font-normal'>yrs</small></h2>
                            <span className='text-lg md:text-sm'>Age</span>
                        </div>
                    </div>
                    <Break addBreakTime={addBreakTime} />
                    <ExerciseDetails addList={addList} getTime={getTime} activityCompleted={activityCompleted} />
                </header>
            </section>
        </div>
    );
};

export default Profile;