import React from 'react';
import useRooms from './useRooms';

const useAverage = () => {
    const {allCategoryRooms} = useRooms();

    const getAverage = (type) => {
        let placeType;
        if(type === "All types"){
            placeType = allCategoryRooms;
        }
        else if(type === "Rooms"){
            placeType = allCategoryRooms?.filter(room => room.category === type);
        }
        else{
            placeType = allCategoryRooms?.filter(room => room.propertyType === type);
        }

        const totalPrice = placeType?.reduce((accumulator, currentValue) => currentValue.price + accumulator, 0);
        const averagePrice = totalPrice / placeType.length;

        return averagePrice;
    }

    let allTypesAveragePrice = parseInt(getAverage("All types"))
    let roomsAveragePrice = parseInt(getAverage("Rooms"))
    let homesAveragePrice = parseInt(getAverage("Home"))

    return [allTypesAveragePrice, roomsAveragePrice, homesAveragePrice];
};

export default useAverage;