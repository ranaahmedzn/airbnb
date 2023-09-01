const ServiceAnimalModal = ({ setOpenAnimalModal }) => {

    return (
        <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 md:inset-0 h-screen flex justify-center items-center bg-gray-900 bg-opacity-70">
            <div data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease-in-out" className="relative w-full max-w-xl h-[calc(100vh-20%)] bg-white rounded-lg shadow overflow-hidden">
                <div className="relative h-full overflow-y-auto">
                    {/* modal header */}
                    <div className="p-4 h-[60px] border-b sticky top-0 left-0 bg-white">
                        <button onClick={() => setOpenAnimalModal(false)} type="button" className="absolute top-4 left-4 z-10 bg-transparent hover:bg-gray-100 rounded-full text-sm w-8 h-8 inline-flex justify-center items-center">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>
                    <div className="px-6">
                        <img src="https://a0.muscache.com/pictures/adafb11b-41e9-49d3-908e-049dfd6934b6.jpg" alt="" className="w-full" />
                        <div className="pt-6 pb-8">
                            <h3 className="text-2xl font-semibold">Service Animals</h3>
                            <p className="mt-2 mb-3">Service animals aren&apos;t pets, so there&apos;s no need to add them here.</p>
                            <p>Traveling with an emotional support animal? Check out our <br /> <span className="font-semibold underline cursor-pointer">accessibility policy.</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceAnimalModal;