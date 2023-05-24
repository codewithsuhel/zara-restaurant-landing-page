

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center mx-auto md:w-4/12 my-8">
            <p className="m-5 font-bold text-[#fccb05]">-- {subHeading} --</p>
            <h3 className="uppercase text-3xl border-y-4 py-4 ">{heading}</h3>
        </div>
    );
};

export default SectionTitle;