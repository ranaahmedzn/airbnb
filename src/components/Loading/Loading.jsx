import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='h-[calc(100vh-215px)] py-6 flex justify-center items-center'>
            <ScaleLoader color="#FF5A5F" />
        </div>
    );
};

export default Loading;