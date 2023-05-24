import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
            fetch(`review.json`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                setReviews(data)
            })
    },[])
    return (
        <section className="my-30">
            <SectionTitle
                    subHeading={"What Our Clients Say"}
                    heading={"TESTIMONIALS"}
            
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
            reviews.map(review=> <SwiperSlide
                key = {review._id}>
            <div className=" flex flex-col items-center mx-24 my-16">
                <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly/>
                    <p className="py-8">{review.details}</p>
                    <h3 className="text-xl text-yellow-400 text-center">{review.name}</h3>
             </div>

            </SwiperSlide>)
        }
       
      </Swiper>
        </section>
    );
};

export default Testimonials;