import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="h-[calc(100vh-179px)] flex items-center justify-center">
                <h3 className="text-3xl font-semibold">Rooms</h3>
            </div>
            <Footer />
        </div>
    );
};

export default Home;