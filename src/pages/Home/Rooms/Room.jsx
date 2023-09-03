import { format, parse } from "date-fns";
import { AiFillHeart, AiOutlineHeart, AiFillStar } from "react-icons/ai";

const Room = ({room, displayTotalPrice}) => {
    const {location, image, category, dateRange, price, rating} = room || {};

    let startDate = dateRange.split(' - ')[0]
    let endDate = dateRange.split(' - ')[1]
    
    startDate = parse(startDate, 'MMM d, yyyy', new Date())
    endDate = parse(endDate, 'MMM d, yyyy', new Date())

    const difTime = startDate.getTime() - endDate.getTime()
    const difDays = difTime / (1000 * 3600 * 24)
    const days = Math.abs(difDays)
    const totalPrice = price * days;

    startDate = format(startDate, 'MMM d')
    endDate = format(endDate, 'd')


    return (
        <div className='flex flex-col w-full'>
            <div className='aspect-square w-full relative overflow-hidden rounded-xl'>
                <img className='object-cover h-full w-full group-hover:scale-110 transition' src={image} alt='Room' />
                <div className='absolute top-3 right-3'>
                    <div className='relative hover:opacity-80 transition cursor-pointer'>
                        <AiOutlineHeart size={28} className='fill-white absolute -top-[2px] -right-[2px]' />
                        <AiFillHeart size={24} className='fill-neutral-600/70 hover:fill-rose-500' />
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between mt-2">
                <h4 className='font-semibold text-lg'>{location}</h4>
                <div className="flex gap-1 items-center">
                    <AiFillStar />
                    <span>{rating}</span>
                </div>
            </div>
            <p className='font-medium text-sm text-neutral-500'>
                {category}
            </p>
            <p className='font-medium text-sm text-neutral-500'>
                {days} nights . {startDate} - {endDate}
            </p>
            <div className='flex flex-row items-center gap-1 mt-2'>
                <div className='font-semibold'>${displayTotalPrice ? totalPrice : price}</div>
                <div className='font-light'>{displayTotalPrice ? "total before taxes" : "night"}</div>
            </div>
        </div>
    );
};

export default Room;