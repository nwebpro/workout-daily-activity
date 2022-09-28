import React from 'react';

const ExerciseDetails = () => {
    return (
        <section>
            <h3 className='my-5 font-medium text-xl text-black'>Exercise Details</h3>
            <div className='flex justify-between items-center p-5 bg-slate-200 rounded-lg  mb-4'>
                <p className='text-base text-black font-medium'>Exercise Time</p>
                <p className='text-base'>200 Hours</p>
            </div>
            <div className='flex justify-between items-center p-5 bg-slate-200 rounded-lg  mb-3'>
                <p className='text-base text-black font-medium'>Break Time</p>
                <p className='text-base'>10 Minutes</p>
            </div>
            <div className="flex space-x-2">
                <button className="mt-4 px-4 py-4 bg-purple-500 hover:bg-purple-600 transition hover:transition text-white text-sm font-medium rounded-md w-full">
                                Activity Completed
                </button>
            </div>
        </section>
    );
};

export default ExerciseDetails;