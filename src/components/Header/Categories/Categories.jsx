import { PiSlidersHorizontalBold } from 'react-icons/pi';
import categories from './categoriesData';
import Category from './Category';
import { useEffect, useState } from 'react';
import FiltersModal from '../../FiltersModal/FiltersModal';

const Categories = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [openModal, setOpenModal] = useState(false)

    // catch the window scrolling and setSticky value
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        if (currentScrollPos > prevScrollPos) {
            setIsSticky(true);
        }
        else {
            setIsSticky(false)
        }
        setPrevScrollPos(currentScrollPos);
    };

    return (
        <div className={`${isSticky ? "pt-0 shadow" : "pt-4"} transition-all`}>
            <div className={`max-w-7xl mx-auto flex flex-row items-center justify-between overflow-x-auto`}>
                {categories.map(item => (
                    <Category
                        label={item.label}
                        icon={item.icon}
                        key={item.label}
                    />
                ))}
                <div onClick={() => setOpenModal(true)}
                    className='p-4 border-[1px] border-neutral-200 flex flex-row items-center gap-2 rounded-xl cursor-pointer'>
                    <PiSlidersHorizontalBold />
                    <p className="font-medium text-sm">Filters</p>
                </div>
                {/* this is the filters modal */}
                {
                    openModal && <FiltersModal setOpenModal={setOpenModal} />
                }
            </div>
        </div>
    );
};

export default Categories;