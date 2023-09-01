
const Category = ({ label, icon: Icon, }) => {
    return (
        <div className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 border-transparent hover:border-b-neutral-300 hover:text-neutral-800 text-neutral-500 transition cursor-pointer`}>
            <Icon size={24} />
            <div className='text-sm font-medium'>{label}</div>
        </div>
    );
};

export default Category;