import { useState } from "react";
import Room from "./Room";

const Rooms = () => {
    const [rooms, setRooms] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])

    return (
        <div className="max-w-7xl mx-auto ">
            <div onClick={() => setOpenModal(true)}
                className='w-full md:w-1/2 mx-auto p-4 mt-5 border-[1px] border-neutral-200 flex flex-row items-center gap-2 rounded-xl cursor-pointer'>
                <p className="font-medium">Display total price</p>
                <div className="h-5 w-[1px] bg-gray-300"></div>
                <p className="text-gray-600">Includes all fees, before taxes</p>

                <label class="relative inline-flex ml-auto items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div class={`w-12 h-8 bg-gray-400 hover:bg-gray-500 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[55%] peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-[#2A2A2A]`}></div>
                </label>
            </div>

            <div className="pt-6 pb-20 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">
                {
                    rooms.map((room, index) => <Room key={index} />)
                }
            </div>
        </div>
    );
};

export default Rooms;