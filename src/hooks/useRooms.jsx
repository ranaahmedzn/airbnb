import React, { useContext } from 'react';
import { RoomsContext } from '../providers/RoomsProvider';

const useRooms = () => {
    const roomsInfo = useContext(RoomsContext)   
    return roomsInfo;
}   

export default useRooms;