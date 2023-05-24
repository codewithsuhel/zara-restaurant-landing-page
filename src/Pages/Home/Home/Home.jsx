import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefFood from "../ChefFood/ChefFood";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";



const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <Category></Category>
         <AboutUs></AboutUs>
         <PopularMenu></PopularMenu>
         <Contact></Contact>
         <ChefFood></ChefFood>
         <Featured></Featured>
         <Testimonials></Testimonials>
        </div>
    );
};

export default Home;