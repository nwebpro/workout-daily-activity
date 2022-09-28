import React from 'react';

const Break = () => {
    return (
        <section className='mb-10'>
            <h3 className='my-5 font-medium text-xl text-black'>Add A Break</h3>
            <div className='flex justify-between bg-slate-200 p-5 rounded-xl'>
                <button class="w-12 h-12 rounded-full mr-2 text-xs font-bold bg-white">10m</button>
                <button class="w-12 h-12 rounded-full mr-2 text-xs font-bold bg-white">20m</button>
                <button class="w-12 h-12 rounded-full mr-2 text-xs font-bold bg-white">30m</button>
                <button class="w-12 h-12 rounded-full mr-2 text-xs font-bold bg-white">40m</button>
                <button class="w-12 h-12 rounded-full mr-2 text-xs font-bold bg-white">01h</button>
            </div>
        </section>
    );
};

export default Break;