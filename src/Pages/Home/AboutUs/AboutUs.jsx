import img from '../../../assets/home/chef-service.jpg'

const AboutUs = () => {
    return (
        <div>
            <div className='relative mt-16 mb-16'>
                <img src={img} alt="" />
            </div>
            <div className='absolute text-center bg-white border w-2/3 ms-36 -mt-96 p-10 shadow-2xl'>
            <h2 className='text-2xl font-semibold p-5'>ZaRa Restaurant</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam natus temporibus perferendis sunt soluta, unde non consequatur ratione maxime reprehenderit harum molestiae magni aspernatur explicabo expedita, delectus quibusdam odit dignissimos.</p>
            </div>
            
        </div>
    );
};

export default AboutUs;