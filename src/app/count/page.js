'use client'

import React, { useState } from 'react';

const CountPage = () => {

    const [count, setCount] = useState(0)
    return (
        <div>
            <h1 className='text-3xl text-yellow-400 text-center  mt-6'>Counter</h1>
            <div className='flex justify-center mt-6 gap-3'>

                <button onClick={()=>setCount(count+1)} className='text-3xl bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-3 rounded-md'>
                    +
                </button>
            <span className='text-2xl'>{count}</span>

            <button onClick={()=>setCount(count-1)} className='text-3xl bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-3 rounded-md'>
                    -
                </button>

            </div>
        </div>
    );
};

export default CountPage;