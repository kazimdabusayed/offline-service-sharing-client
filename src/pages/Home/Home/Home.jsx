import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import ContactUs from "../ContactUs/ContactUs";
import PopulerServices from "../PopulerServices/PopulerServices";


const Home = () => {
    return (
        <div>
            <Banner/>
            <PopulerServices/>
            <Blog/>
            <ContactUs/>
        </div>
    );
};

export default Home;