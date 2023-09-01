import React, { createContext, useEffect, useState } from 'react';

export const RoomsContext = createContext(null)

const RoomsProvider = ({ children }) => {
    const [rooms, setRooms] = useState([])
    const [allCategoryRooms, setAllCategoryRooms] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/rooms')
            .then(res => res.json())
            .then(data => {
                setRooms(data)
                setAllCategoryRooms(data)
            })
    }, [])


    const roomsInfo = {
        rooms,
        setRooms,
        allCategoryRooms
    }

    return (
        <RoomsContext.Provider value={roomsInfo}>
            {children}
        </RoomsContext.Provider>
    );
};

export default RoomsProvider;