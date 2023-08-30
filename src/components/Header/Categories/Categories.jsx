import { PiSlidersHorizontalBold } from 'react-icons/pi';
import categories from './categoriesData';
import Category from './Category';

const Categories = () => {
    return (
        <div className='max-w-7xl mx-auto pt-4 flex flex-row items-center justify-between overflow-x-auto'>
            {categories.map(item => (
                <Category
                    label={item.label}
                    icon={item.icon}
                    key={item.label}
                />
            ))}
            <div
                className='p-4 border-[1px] border-neutral-200 flex flex-row items-center gap-2 rounded-xl cursor-pointer'>
                <PiSlidersHorizontalBold />
                <p className="font-medium text-sm">Filters</p>
            </div>
        </div>
    );
};

export default Categories;