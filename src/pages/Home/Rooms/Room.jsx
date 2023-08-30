import { AiFillHeart, AiOutlineHeart, AiFillStar } from "react-icons/ai";

const Room = () => {
    return (
        <div className='flex flex-col w-full'>
            <div className='aspect-square w-full relative overflow-hidden rounded-xl'>
                <img className='object-cover h-full w-full group-hover:scale-110 transition' src={"https://a0.muscache.com/im/pictures/a71562ca-bb0e-425d-b33f-e397617159e8.jpg?im_w=720"} alt='Room' />
                <div className='absolute top-3 right-3'>
                    <div className='relative hover:opacity-80 transition cursor-pointer'>
                        <AiOutlineHeart size={28} className='fill-white absolute -top-[2px] -right-[2px]' />
                        <AiFillHeart size={24} className='fill-neutral-600/70 hover:fill-rose-500' />
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between mt-2">
                <h4 className='font-semibold text-lg'>Sirajganj, Bangladesh</h4>
                <div className="flex gap-1 items-center">
                    <AiFillStar />
                    <span>4.5</span>
                </div>
            </div>
            <p className='font-medium text-sm text-neutral-500'>
                Beach
            </p>
            <p className='font-medium text-sm text-neutral-500'>
                5 nights . Aug 20 - 25
            </p>
            <div className='flex flex-row items-center gap-1 mt-2'>
                <div className='font-semibold'>$550</div>
                <div className='font-light'>night</div>
            </div>
        </div>
    );
};

export default Room;