import Categories from "./Categories/Categories";
import Navbar from "./Navbar/Navbar";

const Header = () => {
    return (
        <header>
            {/* navbar*/}
            <Navbar />
            
            {/* categories nav menu */}
            <Categories />
        </header>
    );
};

export default Header;