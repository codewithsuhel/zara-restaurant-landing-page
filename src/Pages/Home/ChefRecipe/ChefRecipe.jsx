

const ChefRecipe = ({food}) => {
    const {image, name, recipe, price} = food
    return (
        <div className="bg-[#F3F3F3] rounded-md mt-10 mb-12">
            <div className="card space-y-3 mb-5 text-center ">
                        <img src={image} alt="" />
                        <h2 className="text-xl font-bold">{name}</h2>
                        <p className="m-3">{recipe}</p>
                        <p className="text-yellow-500 font-bold">${price}</p>
                </div>
                <div className="text-center mb-8">
                <button className="btn btn-warning items-center">ADD TO CART</button>
                </div>
        </div>
    );
};

export default ChefRecipe;