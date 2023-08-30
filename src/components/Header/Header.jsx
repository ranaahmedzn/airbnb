import Categories from "./Categories/Categories";
import Navbar from "./Navbar/Navbar";

const Header = () => {
    return (
        <header className="sticky top-0 left-0 z-10 bg-white">
            {/* navbar*/}
            <Navbar />
            
            {/* categories nav menu */}
            <Categories />
        </header>
    );
};

export default Header;