import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";



const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <Category></Category>
         <AboutUs></AboutUs>
         <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;