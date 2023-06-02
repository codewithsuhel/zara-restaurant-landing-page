import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import '../Featured/Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                    subHeading={"Should Try"}
                    heading={"Featured Items"}
            ></SectionTitle>
            <div className="md:flex justify-center bg-slate-500 bg-opacity-60 items-center px-36 py-20">
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className="md:ml-10 space-y-4">
                <p>May 20 2023</p>
                <h3 className="text-2xl">WHERE CAN I GET SOME?</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, quod perferendis a eveniet ipsum perspiciatis, voluptatem accusamus eius, quidem facilis commodi! Dolores necessitatibus aperiam temporibus voluptatibus, quasi doloremque dicta modi?</p>
                <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </div>
            </div>
        </div>
    );
};

export default Featured;