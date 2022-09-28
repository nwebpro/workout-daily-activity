import React from 'react';

const Break = ({addBreakTime}) => {
    return (
        <section className='mb-10'>
            <h3 className='my-5 font-medium text-xl text-black'>Add A Break</h3>
            <div className='flex justify-between bg-slate-200 p-5 rounded-xl'>
                <button onClick={() => addBreakTime(10)} className="w-12 h-12 rounded-full mr-2 text-xs font-bold bg-white">10m</button>
                <button onClick={() => addBreakTime(20)} className="w-12 h-12 rounded-full mr-2 text-xs font-bold bg-white">20m</button>
                <button onClick={() => addBreakTime(30)} className="w-12 h-12 rounded-full mr-2 text-xs font-bold bg-white">30m</button>
                <button onClick={() => addBreakTime(40)} className="w-12 h-12 rounded-full mr-2 text-xs font-bold bg-white">40m</button>
                <button onClick={() => addBreakTime(50)} className="w-12 h-12 rounded-full mr-2 text-xs font-bold bg-white">50m</button>
            </div>
        </section>
    );
};

export default Break;