import React, { createContext, useEffect, useState } from 'react';

export const RoomsContext = createContext(null)

const RoomsProvider = ({ children }) => {
    const [rooms, setRooms] = useState([])
    const [allCategoryRooms, setAllCategoryRooms] = useState([])
    const [loading, setLoading] = useState(true)
    const [showSearchQuery, setShowSearchQuery] = useState(false)

    useEffect(() => {
        fetch('https://airbnb-server-seven.vercel.app/rooms')
            .then(res => res.json())
            .then(data => {
                setRooms(data)
                setAllCategoryRooms(data)
                setLoading(false)
            })
    }, [])


    const roomsInfo = {
        rooms,
        setRooms,
        allCategoryRooms,
        loading,
        showSearchQuery,
        setShowSearchQuery
    }

    return (
        <RoomsContext.Provider value={roomsInfo}>
            {children}
        </RoomsContext.Provider>
    );
};

export default RoomsProvider;