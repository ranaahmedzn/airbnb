import { Link } from "react-router-dom";
import logo from "../../../assets/airbnb.svg"
import { FaUserCircle } from 'react-icons/fa';
import { BiSearch, BiGlobe } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <nav className='py-4 px-4 border-b-[1px]'>
            <div className="max-w-7xl mx-auto flex flex-row  items-center justify-between gap-3 md:gap-0 ">
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
                <div className='border-[1px] w-full md:w-auto py-[7px] rounded-full shadow hover:shadow-md transition cursor-pointer'>
                    <div className='flex flex-row items-center justify-between'>
                        <div className='text-sm font-semibold px-5'>Anywhere</div>
                        <div className='hidden sm:block text-sm font-semibold px-5 border-x-[1px] flex-1 text-center'>Any Week</div>

                        <div className='text-sm pl-5 pr-2 text-gray-600 flex flex-row items-center gap-3'>
                            <div className='hidden sm:block'>Add Guests</div>
                            <div className='p-2 bg-rose-500 rounded-full text-white'>
                                <BiSearch size={18} />
                            </div>
                        </div>
                    </div>
                </div>

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
                        <div onClick={() => setOpen(!open)}
                            className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'>
                            <AiOutlineMenu />
                            <div className='hidden md:block'>
                                <FaUserCircle size={30} className="text-gray-500" />
                            </div>
                        </div>
                    </div>
                    {open && (
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
    );
};

export default Navbar;