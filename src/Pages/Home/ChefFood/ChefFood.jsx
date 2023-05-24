import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ChefRecipe from "../ChefRecipe/ChefRecipe";


const ChefFood = () => {
    const [foods, setFoods] = useState([]);
    useEffect(()=>{
            fetch(`menu.json`)
            .then(res=>res.json())
            .then(data=>{
                const popularFood = data.filter(food => food.category === 'popular')
                setFoods(popularFood)
            })
    },[])
    return (
        <section className="mb-16 mt-16">
            <SectionTitle
                    subHeading={"Should Try"}
                    heading={"CHEF RECOMMENDS"}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                {
                    foods.map(food=><ChefRecipe
                    key = {food._id}
                    food = {food}
                    
                    ></ChefRecipe>)
                }

            </div>
        </section>
    );
};

export default ChefFood;