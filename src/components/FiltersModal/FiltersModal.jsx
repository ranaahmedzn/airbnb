import React, { useEffect, useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BiSolidCity } from 'react-icons/bi';
import { PiWarehouse } from 'react-icons/pi';
import RangeSlider from '../RangeSlider/RangeSlider';
import useRooms from '../../hooks/useRooms';
import useAverage from '../../hooks/useAverage';

const FiltersModal = ({ setOpenModal }) => {
    const [activeTab, setActiveTab] = useState('All types');
    const [minValue, setMinValue] = useState(50);
    const [maxValue, setMaxValue] = useState(1100);
    const [beds, setBeds] = useState(0);
    const [bedrooms, setBedrooms] = useState(0);
    const [propertyType, setPropertyType] = useState([]);
    const { rooms, setRooms, allCategoryRooms } = useRooms();
    const [filteredRooms, setFilteredRooms] = useState([])

    const handlePropertyType = (value) => {
        if (propertyType.includes(value)) {
            const newPropertyType = propertyType.filter(property => property !== value)
            setPropertyType(newPropertyType)
        }
        else {
            setPropertyType(prev => [...prev, value])
        }
    }

    const handleBeds = (value) => {
        if (beds === value) {
            setBeds(0)
        }
        else {
            setBeds(value)
        }
    }

    const handleBedrooms = (value) => {
        if (bedrooms === value) {
            setBedrooms(0)
        }
        else {
            setBedrooms(value)
        }
    }

    const handleClearAll = () => {
        setActiveTab("All types")
        setMinValue(50)
        setMaxValue(1100)
        setBeds(0)
        setBedrooms(0)
        setPropertyType([])
        setRooms(allCategoryRooms)
    }

    const handleShowPlaces = () => {
        if (filteredRooms.length) {
            setRooms(filteredRooms)
            setOpenModal(false)
        }
    }

    // get average price by using a custom hook
    const [allTypesAveragePrice, roomsAveragePrice, homesAveragePrice] = useAverage()


    // fetch data based on the filters options
    useEffect(() => {
        fetch(`https://airbnb-server-seven.vercel.app/rooms/filter?placeType=${activeTab}&priceRange=${[minValue, maxValue]}&beds=${beds}&bedrooms=${bedrooms}&propertyType=${propertyType}`)
            .then(res => res.json())
            .then(data => {
                setFilteredRooms(data)
                // console.log(data)
            })
    }, [activeTab, minValue, maxValue, beds, bedrooms, propertyType])

    return (
        <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 md:inset-0 h-screen flex justify-center items-center bg-gray-900 bg-opacity-70">
            <div data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease-in-out" className="relative w-full max-w-3xl h-[calc(100vh-20%)] bg-white rounded-lg shadow overflow-hidden">
                <div className="relative h-full">
                    {/* modal header */}
                    <div className="p-4 border-b sticky top-0 left-0 bg-white">
                        <button onClick={() => setOpenModal(false)} type="button" className="absolute top-4 left-4 z-10 bg-transparent hover:bg-gray-100 rounded-full text-sm w-8 h-8 inline-flex justify-center items-center">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                        <h3 className="text-xl text-center font-semibold text-gray-900">
                            Filters
                        </h3>
                    </div>

                    {/* modal body */}
                    <div className="p-6 h-full overflow-y-auto">
                        {/* tab filter */}
                        <div className='pb-8 border-b-[1px]'>
                            <div className="mb-5">
                                <h3 className='text-2xl font-semibold'>Type of Place</h3>
                                <p className='text-gray-600'>Search rooms, entire homes, or any type of place.</p>
                            </div>
                            <ul className="w-full px-8 grid grid-cols-3 rounded-lg">
                                <li onClick={() => setActiveTab('All types')} className={`${activeTab === 'All types' ? 'active-tab' : 'default-tab'} rounded-l-lg`}>
                                    <p>All types</p><p className='text-sm'>${allTypesAveragePrice} avg.</p>
                                </li>

                                <li onClick={() => setActiveTab('Rooms')} className={`${activeTab === 'Rooms' ? 'active-tab' : 'default-tab'} border-x-[1px]`}>
                                    <p>Rooms</p>
                                    <p className='text-sm'>${roomsAveragePrice} avg.</p>
                                </li>

                                <li onClick={() => setActiveTab('Home')} className={`${activeTab === 'Home' ? 'active-tab' : 'default-tab'} rounded-r-lg`}>
                                    <p>Entire Homes</p>
                                    <p className='text-sm'>${homesAveragePrice} avg.</p>
                                </li>
                            </ul>
                        </div>

                        {/* range filter */}
                        <div className='py-8 border-b-[1px]'>
                            <div className="mb-5">
                                <h3 className='text-2xl font-semibold'>Price Range</h3>
                                <p className='text-gray-600'>Nightly prices before fees and taxes</p>
                            </div>

                            <div className="mb-8 px-8">
                                <RangeSlider minValue={minValue} setMinValue={setMinValue} maxValue={maxValue} setMaxValue={setMaxValue} />
                            </div>

                            <div className='flex gap-6 px-8 items-center'>
                                <div className='relative w-full flex flex-col px-3 py-2 rounded-lg border border-gray-500 focus:border-2'>
                                    <label htmlFor="place" className="text-xs">Minimum</label>
                                    <span className='absolute top-[24px] left-3'>$</span>
                                    <input onChange={(e) => setMinValue(e.target.value)} type="text" name="place" id="place" className="text-base bg-transparent pl-3 text-gray-600 focus:outline-none" value={minValue} />
                                </div>

                                <div className="border-b w-8 border-gray-500"></div>

                                <div className='relative w-full flex flex-col px-3 py-2 rounded-lg border border-gray-500 focus:border-2'>
                                    <label htmlFor="place" className="text-xs">Maximum</label>
                                    <span className='absolute top-[24px] left-3'>$</span>
                                    <input onChange={(e) => setMaxValue(e.target.value)} type="text" name="place" id="place" className="text-base bg-transparent pl-3 text-gray-600 focus:outline-none" value={maxValue} />
                                </div>
                            </div>
                        </div>

                        {/* bed and bedrooms filter */}
                        <div className='py-8 border-b-[1px] space-y-5'>
                            <h3 className='text-2xl font-semibold'>Rooms and beds</h3>
                            <div>
                                <h4 className='text-lg font-semibold mb-5'>Beds</h4>
                                <div className='flex gap-2'>
                                    <span onClick={() => handleBeds(0)} className={`${beds === 0 ? "active-bed" : "default-bed"}`}>Any</span>
                                    <span onClick={() => handleBeds(1)} className={`${beds === 1 ? "active-bed" : "default-bed"}`}>1</span>
                                    <span onClick={() => handleBeds(2)} className={`${beds === 2 ? "active-bed" : "default-bed"}`}>2</span>
                                    <span onClick={() => handleBeds(3)} className={`${beds === 3 ? "active-bed" : "default-bed"}`}>3</span>
                                    <span onClick={() => handleBeds(4)} className={`${beds === 4 ? "active-bed" : "default-bed"}`}>4</span>
                                    <span onClick={() => handleBeds(5)} className={`${beds === 5 ? "active-bed" : "default-bed"}`}>5</span>
                                    <span onClick={() => handleBeds(6)} className={`${beds === 6 ? "active-bed" : "default-bed"}`}>6</span>
                                    <span onClick={() => handleBeds(7)} className={`${beds === 7 ? "active-bed" : "default-bed"}`}>7</span>
                                    <span onClick={() => handleBeds(8)} className={`${beds === 8 ? "active-bed" : "default-bed"}`}>8+</span>
                                </div>
                            </div>

                            <div>
                                <h4 className='text-lg font-semibold mb-5'>Bedrooms</h4>
                                <div className='flex gap-2'>
                                    <span onClick={() => handleBedrooms(0)} className={`${bedrooms === 0 ? "active-bedroom" : "default-bedroom"}`}>Any</span>
                                    <span onClick={() => handleBedrooms(1)} className={`${bedrooms === 1 ? "active-bedroom" : "default-bedroom"}`}>1</span>
                                    <span onClick={() => handleBedrooms(2)} className={`${bedrooms === 2 ? "active-bedroom" : "default-bedroom"}`}>2</span>
                                    <span onClick={() => handleBedrooms(3)} className={`${bedrooms === 3 ? "active-bedroom" : "default-bedroom"}`}>3</span>
                                    <span onClick={() => handleBedrooms(4)} className={`${bedrooms === 4 ? "active-bedroom" : "default-bedroom"}`}>4</span>
                                    <span onClick={() => handleBedrooms(5)} className={`${bedrooms === 5 ? "active-bedroom" : "default-bedroom"}`}>5</span>
                                    <span onClick={() => handleBedrooms(6)} className={`${bedrooms === 6 ? "active-bedroom" : "default-bedroom"}`}>6</span>
                                    <span onClick={() => handleBedrooms(7)} className={`${bedrooms === 7 ? "active-bedroom" : "default-bedroom"}`}>7</span>
                                    <span onClick={() => handleBedrooms(8)} className={`${bedrooms === 8 ? "active-bedroom" : "default-bedroom"}`}>8+</span>
                                </div>
                            </div>
                        </div>

                        {/* property filter */}
                        <div className='py-6 mb-[150px]'>
                            <h3 className='text-2xl font-semibold mb-5'>Property type</h3>
                            <div className='grid gap-4 grid-cols-4'>
                                <div onClick={() => handlePropertyType('Home')} className={`property-type ${propertyType.includes("Home") ? "ring-2 ring-[#2A2A2A]" : "hover:border-[#2A2A2A]"}`}>
                                    <AiOutlineHome size={32} />
                                    <h3 className="text-lg font-semibold">Home</h3>
                                </div>

                                <div onClick={() => handlePropertyType('Apartment')} className={`property-type ${propertyType.includes("Apartment") ? "ring-2 ring-[#2A2A2A]" : "hover:border-[#2A2A2A]"}`}>
                                    <BiSolidCity size={32} />
                                    <h3 className="text-lg font-semibold">Apartment</h3>
                                </div>

                                <div onClick={() => handlePropertyType('Guesthouse')} className={`property-type ${propertyType.includes("Guesthouse") ? "ring-2 ring-[#2A2A2A]" : "hover:border-[#2A2A2A]"}`}>
                                    <PiWarehouse size={32} />
                                    <h3 className="text-lg font-semibold">GuestHouse</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* modal footer */}
                    <div className="p-4 border-t flex items-center justify-between sticky bottom-0 left-0 bg-white">
                        <button onClick={handleClearAll} className="font-semibold cursor-pointer underline text-gray-800 hover:text-gray-900">
                            Clear All
                        </button>
                        <button onClick={handleShowPlaces} type="button" className="text-white bg-[#2A2A2A] hover:bg-[#2A2A2A] font-medium rounded-lg px-7 py-3 mr-2 mb-2">Show {filteredRooms.length ? filteredRooms?.length : rooms?.length} Places</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FiltersModal;