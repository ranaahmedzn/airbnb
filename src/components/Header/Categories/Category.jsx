import { Link, useLocation } from "react-router-dom";
import useRooms from "../../../hooks/useRooms";
import { useEffect } from "react";

const Category = ({ label, icon: Icon }) => {
    const { setRooms, allCategoryRooms } = useRooms()
    const location = useLocation();
    const category = new URLSearchParams(location.search).get('category');

    useEffect(() => {
        if (category === "All") {
            setRooms(allCategoryRooms)
        }
        else {
            const specificCategoryRooms = allCategoryRooms?.filter(room => room.category === category);
            setRooms(specificCategoryRooms)
        }
    }, [category])
    
    return (
        <Link to={`/?category=${label}`}>
            <div className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 border-transparent text-neutral-500 transition cursor-pointer ${category === label || label === "All" && !category ? "text-neutral-800 border-b-neutral-800" : "hover:border-b-neutral-300 hover:text-neutral-800"}`}>
                <Icon size={24} />
                <div className='text-sm font-medium'>{label}</div>
            </div>
        </Link>
    );
};

export default Category;