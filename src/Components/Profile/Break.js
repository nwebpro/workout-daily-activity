import React from 'react';

const Break = ({addBreakTime}) => {
    return (
        <section className='mb-10'>
            <h3 className='my-5 font-medium text-xl text-black'>Add A Break</h3>
            <div className='flex flex-wrap justify-between bg-slate-200 px-5 py-2 rounded-xl'>
                <button onClick={() => addBreakTime(10)} className=" my-3 w-10 h-10 rounded-full text-xs font-bold bg-white active:bg-purple-500 focus:bg-purple-500 active:text-white focus:text-white">10m</button>
                <button onClick={() => addBreakTime(20)} className=" my-3 w-10 h-10 rounded-full  text-xs font-bold bg-white active:bg-purple-500 focus:bg-purple-500 active:text-white focus:text-white">20m</button>
                <button onClick={() => addBreakTime(30)} className=" my-3  w-10 h-10 rounded-full  text-xs font-bold bg-white active:bg-purple-500 focus:bg-purple-500 active:text-white focus:text-white">30m</button>
                <button onClick={() => addBreakTime(40)} className=" my-3  w-10 h-10 rounded-full  text-xs font-bold bg-white active:bg-purple-500 focus:bg-purple-500 active:text-white focus:text-white">40m</button>
                <button onClick={() => addBreakTime(50)} className=" my-3 w-10 h-10 rounded-full text-xs font-bold bg-white active:bg-purple-500 focus:bg-purple-500 active:text-white focus:text-white">50m</button>
            </div>
        </section>
    );
};

export default Break;