import React, { useState } from 'react';

const FiltersModal = ({ setOpenModal }) => {
    const [activeTab, setActiveTab] = useState('Any Type')

    return (
        <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 md:inset-0 h-screen flex justify-center items-center bg-gray-900 bg-opacity-70">
            <div className="relative w-full max-w-3xl h-[calc(100vh-20%)] bg-white rounded-lg shadow overflow-hidden">
                <div className="relative h-full">
                    {/* modal header */}
                    <div className="p-4 border-b sticky top-0 left-0 bg-white">
                        <button onClick={() => setOpenModal(false)} type="button" className="absolute top-4 left-4 z-10 bg-transparent hover:bg-gray-100 rounded-full text-sm w-8 h-8 inline-flex justify-center items-center">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                        <h3 className="text-xl text-center font-semibold text-gray-900">
                            Filters
                        </h3>
                    </div>
                    
                    {/* modal body */}
                    <div className="p-6 h-full overflow-y-auto">
                        {/* tab filter */}
                        <div className='py-6 border-b-[1px]'>
                            <h3 className='text-2xl font-semibold mb-5'>Type of Place</h3>
                            <ul className="w-1/2 grid grid-cols-3 rounded-lg">
                                <li onClick={() => setActiveTab('Any Type')} className={`${activeTab === 'Any Type' ? 'active-tab' : 'default-tab'} rounded-l-lg`}>
                                    <p>Any Type</p><p className='text-sm'>$115 avg.</p>
                                </li>

                                <li onClick={() => setActiveTab('Room')} className={`${activeTab === 'Room' ? 'active-tab' : 'default-tab'} border-x-[1px]`}>
                                    <p>Room</p>
                                    <p className='text-sm'>$64 avg.</p>
                                </li>

                                <li onClick={() => setActiveTab('Entire Room')} className={`${activeTab === 'Entire Room' ? 'active-tab' : 'default-tab'} rounded-r-lg`}>
                                    <p>Entire Room</p>
                                    <p className='text-sm'>$133 avg.</p>
                                </li>
                            </ul>
                        </div>

                        {/* range filter */}
                        <div className='py-6 border-b-[1px]'>
                            <h3 className='text-2xl font-semibold mb-5'>Price Range</h3>
                        </div>

                        {/* data filter */}
                        <div className='py-6 border-b-[1px]'>
                            <h3 className='text-2xl font-semibold mb-5'>Rooms and beds</h3>

                        </div>
                        {/* property filter */}
                        <div className='py-6 border-b-[1px]'>
                            <h3 className='text-2xl font-semibold mb-5'>Property type</h3>

                        </div>
                    </div>
                    
                    {/* modal footer */}
                    <div className="p-4 border-t flex items-center justify-between sticky bottom-0 left-0 bg-white">
                        <h3 className="font-semibold cursor-pointer underline text-gray-800 hover:text-gray-900">
                            Clear All
                        </h3>
                        <button type="button" class="text-white bg-[#2A2A2A] hover:bg-[#2A2A2A] font-medium rounded-lg px-7 py-3 mr-2 mb-2">Show 650 Places</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FiltersModal;