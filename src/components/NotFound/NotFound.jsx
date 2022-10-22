import React from 'react';
import notFound from '../../images/404.png';

const NotFound = () => {
    return (
        <div className='flex items-center justify-center'>
            <img src={notFound} alt="" className='w-[790px] rounded-xl' />
        </div>
    );
};

export default NotFound;