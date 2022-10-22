import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner h-[480px] flex justify-center items-center flex-col">
            <h1 className='text-5xl font-semibold text-center'>Best food waiting for your belly</h1>
            <div className='mt-8'>
                <input type="text" placeholder='Search food items' className='pr-52 pl-8 py-4 rounded-full focus:outline-none'/>
                <input type="submit" value="Search" className='text-white input-btn py-4 px-10 ml-[-50px] rounded-full font-semibold' />
            </div>
        </div>
    );
};

export default Banner;