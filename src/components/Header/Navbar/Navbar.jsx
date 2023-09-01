import { Link } from "react-router-dom";
import logo from "../../../assets/airbnb.svg"
import { FaUserCircle } from 'react-icons/fa';
import { BiSearch, BiGlobe } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiPlus, FiMinus } from "react-icons/fi";
import { useEffect, useState } from "react";
import DatePicker from "../../DatePicker/DatePicker";
import ServiceAnimalModal from "../../ServiceAnimalModal/ServiceAnimalModal";

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(false)
    const [openDetailNav, setOpenDetailNav] = useState(false)
    const [openAnimalModal, setOpenAnimalModal] = useState(false)
    const [detailNavOption, setDetailNavOption] = useState("")
    const [prevScrollPos, setPrevScrollPos] = useState(0)

    // catch the window scrolling and setOpenDetailNav value
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        if (currentScrollPos > prevScrollPos) {
            setOpenDetailNav(false)
            setOpenAnimalModal(false)
        }
    };

    return (
        <div>
            <nav className="py-4 px-4 border-b-[1px] relative">
                {/* overlay after open detailNav */}
                <div onClick={() => setOpenDetailNav(false)} className={`h-[calc(100vh-83px)] w-full bg-gray-900 bg-opacity-40 fixed top-[83px] left-0 ${openDetailNav ? "block" : "hidden"}`}></div>

                <div className="max-w-7xl mx-auto flex flex-row  items-center justify-between gap-3 md:gap-0 ">
                    {/* logo */}
                    <Link to='/'>
                        <img
                            className='hidden md:block mr-[100px]'
                            src={logo}
                            alt='logo'
                            width='100'
                            height='100'
                        />
                    </Link>


                    {/*search box */}
                    {openDetailNav ? <div>
                        <ul data-aos="zoom-in" data-aos-delay="100" data-aos-duration="100" className="flex gap-8 pt-3 pb-1">
                            <li className="text-gray-800 cursor-pointer pb-2 border-b-2 border-gray-800">Stays</li>
                            <li className="text-gray-800 transition hover:text-gray-500 cursor-pointer pb-2 hover:border-b-2 hover:border-gray-400">Experiences</li>
                            <li className="text-gray-800 transition hover:text-gray-500 cursor-pointer pb-2 hover:border-b-2 hover:border-gray-400">Online Experiences</li>
                        </ul>

                        <div data-aos="fade-down" data-aos-duration="200" data-aos-easing="ease-in-out" className="absolute left-0 right-0 top-[80px] flex justify-center bg-white pb-4">
                            <div className={`relative w-[800px] rounded-full flex items-center justify-between border ${openDetailNav ? "bg-gray-100" : "bg-white"}`}>

                                <div onClick={() => setDetailNavOption('Anywhere')} className={`w-1/3 flex flex-col px-5 py-3 rounded-full cursor-pointer ${detailNavOption === 'Anywhere' ? "bg-white shadow-xl" : "hover:bg-gray-200"}`}>
                                    <label htmlFor="place" className="font-medium text-sm">Where</label>
                                    <input type="text" name="place" id="place" className="text-sm bg-transparent focus:outline-none" placeholder="Search destinations" />
                                </div>

                                <div className="h-8 w-[1px] bg-gray-300"></div>

                                <div onClick={() => setDetailNavOption('Check in')} className={`px-8 py-3 rounded-full cursor-pointer text-sm ${detailNavOption === 'Any Week' || detailNavOption === "Check in" ? "bg-white shadow-xl" : "hover:bg-gray-200"}`}>
                                    <p className="font-medium">Check in</p>
                                    <p className="text-gray-400">Add dates</p>
                                </div>

                                <div className="h-8 w-[1px] bg-gray-300"></div>

                                <div onClick={() => setDetailNavOption('Check out')} className={`px-8 py-3 rounded-full cursor-pointer text-sm ${detailNavOption === 'Check out' ? "bg-white shadow-xl" : "hover:bg-gray-200"}`}>
                                    <p className="font-medium">Check out</p>
                                    <p className="text-gray-400">Add dates</p>
                                </div>

                                <div className="h-8 w-[1px] bg-gray-300"></div>

                                <div onClick={() => setDetailNavOption('Add guests')} className={`flex w-1/3 items-center justify-between pl-5 pr-2 py-2.5 rounded-full cursor-pointer text-sm ${detailNavOption === 'Add guests' ? "bg-white shadow-xl" : "hover:bg-gray-200"}`}>
                                    <div>
                                        <p className="font-medium">Who</p>
                                        <p className="text-gray-400">Add guests</p>
                                    </div>

                                    <button type="button" className="text-white bg-rose-500 hover:bg-rose-800 font-medium rounded-full text-sm p-3 text-center inline-flex gap-2 items-center">
                                        <BiSearch size={20} />
                                        <span className={`transition ${detailNavOption === "Add guests" ? "block" : "hidden"}`}>Search</span>
                                    </button>
                                </div>

                                {/* dates selections */}
                                {
                                    detailNavOption === "Any Week" || detailNavOption === "Check in" || detailNavOption === "Check out" ? <div data-aos="zoom-in" data-aos-delay="200" data-aos-duration="100" className="bg-white rounded-xl absolute top-full left-0 mt-3 flex justify-center w-[800px] px-10 py-8 border">
                                        <DatePicker />
                                    </div> : ""
                                }

                                {/* adding guests */}
                                {
                                    detailNavOption === "Add guests" ? <div data-aos="zoom-in" data-aos-delay="200" data-aos-duration="100" style={{ boxShadow: "0px 1px 22px -6px rgba(0,0,0,0.25)" }} className='absolute top-full right-0 mt-3 rounded-xl w-[420px] p-5 border bg-white overflow-hidden text-sm'>

                                        <div className='flex gap-5 flex-col cursor-pointer'>
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <p className="font-semibold text-base mb-1">Adults</p>
                                                    <p className="text-gray-600">Age 13 or above</p>
                                                </div>
                                                <div className="flex gap-5 items-center text-gray-600 hover:text-gray-800">
                                                    <span className="border p-2 rounded-full border-gray-400 hover:border-gray-600"><FiMinus /></span>
                                                    <span>0</span>
                                                    <span className="border p-2 rounded-full border-gray-400 hover:border-gray-600"><FiPlus /></span>
                                                </div>
                                            </div>

                                            <div className="w-full h-[1px] bg-gray-200"></div>

                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <p className="font-semibold text-base mb-1">Children</p>
                                                    <p className="text-gray-600">Age 2-12</p>
                                                </div>
                                                <div className="flex gap-5 items-center text-gray-600 hover:text-gray-800">
                                                    <span className="border p-2 rounded-full border-gray-400 hover:border-gray-600"><FiMinus /></span>
                                                    <span>0</span>
                                                    <span className="border p-2 rounded-full border-gray-400 hover:border-gray-600"><FiPlus /></span>
                                                </div>
                                            </div>

                                            <div className="w-full h-[1px] bg-gray-200"></div>

                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <p className="font-semibold text-base mb-1">Infants</p>
                                                    <p className="text-gray-600">Under 2</p>
                                                </div>
                                                <div className="flex gap-5 items-center text-gray-600 hover:text-gray-800">
                                                    <span className="border p-2 rounded-full border-gray-400 hover:border-gray-600"><FiMinus /></span>
                                                    <span>0</span>
                                                    <span className="border p-2 rounded-full border-gray-400 hover:border-gray-600"><FiPlus /></span>
                                                </div>
                                            </div>

                                            <div className="w-full h-[1px] bg-gray-200"></div>

                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <p className="font-semibold text-base mb-1">Pets</p>
                                                    <p onClick={() => setOpenAnimalModal(true)} className="text-gray-600 hover:text-gray-800 underline">Bringing a service animal?</p>
                                                </div>
                                                <div className="flex gap-5 items-center text-gray-600 hover:text-gray-800">
                                                    <span className="border p-2 rounded-full border-gray-400 hover:border-gray-600"><FiMinus /></span>
                                                    <span>0</span>
                                                    <span className="border p-2 rounded-full border-gray-400 hover:border-gray-600"><FiPlus /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : ""
                                }
                            </div>
                        </div>
                        {
                            openAnimalModal && <ServiceAnimalModal setOpenAnimalModal={setOpenAnimalModal} />
                        }
                    </div>
                        : <div onClick={() => setOpenDetailNav(true)} className='border-[1px] w-full md:w-auto py-[7px] rounded-full shadow hover:shadow-md transition cursor-pointer'>
                            <div className='flex flex-row items-center justify-between'>
                                <div onClick={() => setDetailNavOption('Anywhere')} className='text-sm font-semibold px-5'>Anywhere</div>

                                <div onClick={() => setDetailNavOption('Any Week')} className='hidden sm:block text-sm font-semibold px-5 border-x-[1px] flex-1 text-center'>Any Week</div>

                                <div onClick={() => setDetailNavOption('Add guests')} className='text-sm pl-5 pr-2 text-gray-600 flex flex-row items-center gap-3'>
                                    <div className='hidden sm:block'>Add Guests</div>
                                    <div className='p-2 bg-rose-500 rounded-full text-white'>
                                        <BiSearch size={18} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                    {/* this is the dropdown menu */}
                    <div className='relative'>
                        <div className='flex flex-row items-center gap-1'>
                            <div className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'>
                                Airbnb your home
                            </div>

                            <div className='hidden md:block py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'>
                                <BiGlobe size={18} />
                            </div>

                            {/* Dropdown btn */}
                            <div onClick={() => setOpenDropdown(!openDropdown)}
                                className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'>
                                <AiOutlineMenu />
                                <div className='hidden md:block'>
                                    <FaUserCircle size={30} className="text-gray-500" />
                                </div>
                            </div>
                        </div>
                        {openDropdown && (
                            <div style={{ boxShadow: "0px 1px 22px -6px rgba(0,0,0,0.25)" }} className='absolute rounded-xl w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-14 text-sm'>
                                <div className='flex flex-col cursor-pointer'>
                                    <Link to='/'
                                        className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition'>
                                        Home
                                    </Link>
                                    <Link to='/signup'
                                        className='px-4 py-3 hover:bg-neutral-100 transition font-medium'>
                                        Sign Up
                                    </Link>
                                    <Link to='/login'
                                        className='px-4 py-3 hover:bg-neutral-100 transition'>
                                        Login
                                    </Link>

                                    <div className="w-full h-[1px] bg-gray-200"></div>

                                    <Link to='/'
                                        className='px-4 py-3 hover:bg-neutral-100 transition'>
                                        Airbnb your home
                                    </Link>
                                    <Link to='/'
                                        className='px-4 py-3 hover:bg-neutral-100 transition'>
                                        Help Center
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;