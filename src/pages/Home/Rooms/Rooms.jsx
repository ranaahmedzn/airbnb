import { useState } from "react";
import useRooms from "../../../hooks/useRooms";
import Room from "./Room";

const Rooms = () => {
    const [displayTotalPrice, setDisplayTotalPrice] = useState(false)
    const [showMore, setShowMore] = useState(false)
    const { rooms } = useRooms();

    return (
        <div className="max-w-7xl mx-auto ">
            <div className='w-full md:w-1/2 mx-auto p-4 mt-5 border-[1px] border-neutral-200 flex flex-row items-center gap-2 rounded-xl cursor-pointer'>
                <p className="font-medium">Display total price</p>
                <div className="h-5 w-[1px] bg-gray-300"></div>
                <p className="text-gray-600">Includes all fees, before taxes</p>

                <label className="relative inline-flex ml-auto items-center cursor-pointer">
                    <input onChange={(e) => setDisplayTotalPrice(e.target.checked)} type="checkbox" value="" className="sr-only peer" />
                    <div className={`w-12 h-8 bg-gray-400 hover:bg-gray-500 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[55%] peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-[#2A2A2A]`}></div>
                </label>
            </div>

            <div className="pt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">
                {
                    showMore ? rooms?.map((room, index) => <Room room={room} key={index} displayTotalPrice={displayTotalPrice} />)
                    : rooms?.slice(0, 30).map((room, index) => <Room room={room} key={index} displayTotalPrice={displayTotalPrice} />)
                }
            </div>

            <div className={`text-center mt-14 ${showMore && "hidden"} ${rooms.length < 30 && "hidden"}`}>
                <p className="text-lg font-semibold mb-4">Continue Exploring Rooms</p>
                <button onClick={() => setShowMore(true)} type="button" className="text-white bg-[#2A2A2A] hover:bg-[#2A2A2A] font-medium rounded-lg px-7 py-3 mr-2 mb-2">Show More</button>
            </div>
        </div>
    );
};

export default Rooms;