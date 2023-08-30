import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { BiGlobe } from 'react-icons/bi';

const Footer = () => {
    return (
        <div className='bg-[#F7F7F7]'>
            <div className='max-w-7xl mx-auto py-10'>
                <h3 className='text-2xl font-semibold mb-5'>Inspiration for future getaways</h3>
                <ul className='flex gap-6 text-gray-600 font-medium border-b-[1px]'>
                    <li className='cursor-pointer pb-3 border-b-2 border-gray-800'>Popular</li>
                    <li className='cursor-pointer pb-3'>Arts & culture</li>
                    <li className='cursor-pointer pb-3'>Outdoors</li>
                    <li className='cursor-pointer pb-3'>Mountains</li>
                    <li className='cursor-pointer pb-3'>Beach</li>
                    <li className='cursor-pointer pb-3'>Unique stays</li>
                    <li className='cursor-pointer pb-3'>Categories</li>
                    <li className='cursor-pointer pb-3'>Things to do</li>
                    <li className='cursor-pointer pb-3'>Airbnb-friendly apartments</li>
                </ul>
                
                {/* here I used static data It will be better if we use dynamic or server data */}
                <div className="grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 pt-6 text-sm font-medium text-gray-600">
                    <div>
                        <h4 className='text-gray-800 text-base mb-1'>Canmore</h4>
                        <p>Chalet rentals</p>
                    </div>
                    <div>
                        <h4 className='text-gray-800 text-base mb-1'>Benalmádena</h4>
                        <p>Beach house rentals</p>
                    </div>
                    <div>
                        <h4 className='text-gray-800 text-base mb-1'>Marbella</h4>
                        <p>Apartment rentals</p>
                    </div>
                    <div>
                        <h4 className='text-gray-800 text-base mb-1'>Mijas</h4>
                        <p>Vacation rentals</p>
                    </div>
                    <div>
                        <h4 className='text-gray-800 text-base mb-1'>Prescott</h4>
                        <p>Cabin rentals</p>
                    </div>
                    <div>
                        <h4 className='text-gray-800 text-base mb-1'>Scottsdale</h4>
                        <p>Condo rentals</p>
                    </div>
                    <div>
                        <h4 className='text-gray-800 text-base mb-1'>Tucson</h4>
                        <p>Rentals with pools</p>
                    </div>
                    <div>
                        <h4 className='text-gray-800 text-base mb-1'>Jasper</h4>
                        <p>Cabin rentals</p>
                    </div>
                    <div>
                        <h4 className='text-gray-800 text-base mb-1'>Mountain View</h4>
                        <p>Vacation rentals</p>
                    </div>
                    <div>
                        <h4 className='text-gray-800 text-base mb-1'>Devonport</h4>
                        <p>Cottage rentals</p>
                    </div>
                    <div>
                        <h4 className='text-gray-800 text-base mb-1'>Mallacoota</h4>
                        <p>Vacation rentals</p>
                    </div>
                    <div>
                        <h4 className='text-gray-800 text-base mb-1'>Ibiza</h4>
                        <p>Apartment rentals</p>
                    </div>
                </div>
            </div>

            <div className='border-b-[1px]'></div>

            <div className='max-w-7xl mx-auto'>
                <div className='border-b-[1px] py-10 text-sm font-medium text-gray-600 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div>
                        <h4 className='text-base mb-3 text-gray-800'>Support</h4>
                        <ul className='space-y-3'>
                            <li><Link to="/" className='hover:underline'>Help Center</Link></li>
                            <li><Link to="/" className='hover:underline'>AirCover</Link></li>
                            <li><Link to="/" className='hover:underline'>Combating discrimination</Link></li>
                            <li><Link to="/" className='hover:underline'>Supporting people with disabilities</Link></li>
                            <li><Link to="/" className='hover:underline'>Cancellation options</Link></li>
                            <li><Link to="/" className='hover:underline'>Report neighborhood concern</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-base mb-3 text-gray-800'>Hosting</h4>
                        <ul className='space-y-3'>
                            <li><Link to="/" className='hover:underline'>Airbnb your home</Link></li>
                            <li><Link to="/" className='hover:underline'>AirCover for Hosts</Link></li>
                            <li><Link to="/" className='hover:underline'>Hosting resources</Link></li>
                            <li><Link to="/" className='hover:underline'>Community forum</Link></li>
                            <li><Link to="/" className='hover:underline'>Hosting responsibly</Link></li>
                            <li><Link to="/" className='hover:underline'>Airbnb-friendly apartments</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className='text-base mb-3 text-gray-800'>Airbnb</h4>
                        <ul className='space-y-3'>
                            <li><Link to="/" className='hover:underline'>Newsroom</Link></li>
                            <li><Link to="/" className='hover:underline'>News features</Link></li>
                            <li><Link to="/" className='hover:underline'>Careers</Link></li>
                            <li><Link to="/" className='hover:underline'>Investors</Link></li>
                            <li><Link to="/" className='hover:underline'>Gift cards</Link></li>
                            <li><Link to="/" className='hover:underline'>Airbnb.org disaster relief</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="py-6 flex justify-between items-center">
                    <div className='flex gap-2 text-sm font-medium text-gray-600'>
                        <p>&copy; 2023 Airbnb, Inc. </p>
                        <ul className='flex gap-2'>
                            .
                            <li>
                                <Link to="/" className='hover:underline'>Terms</Link>
                            </li>
                            .
                            <li>
                                <Link to="/" className='hover:underline'>Sitemap</Link>
                            </li>
                            .
                            <li>
                                <Link to="/" className='hover:underline'>Privacy</Link>
                            </li>
                            .
                            <li>
                                <Link to="/" className='hover:underline'>Your Privacy Choices</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='flex gap-5'>
                        <div className='flex items-center gap-2'>
                            <BiGlobe size={18} />
                            <span className='underline cursor-pointer font-medium'>English (US)</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            $
                            <span className='hover:underline cursor-pointer font-medium'>USD</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaFacebookSquare size={20} className='cursor-pointer' />
                            <FaTwitterSquare size={20} className='cursor-pointer' />
                            <FaInstagramSquare size={20} className='cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;