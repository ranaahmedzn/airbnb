import { useState } from "react";
import Room from "./Room";

const Rooms = () => {
    const [rooms, setRooms] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])

    return (
        <div className="max-w-7xl mx-auto pt-10 pb-20 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">
            {
                rooms.map((room, index) => <Room key={index} />)
            }
        </div>
    );
};

export default Rooms;