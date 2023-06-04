import SectionHead from "../utils/SectionHead";

const Categories = () => {
    const catData = [
        {
            title: 'Art',
            image: 'cat-2',
        },
        {
            title: 'Music',
            image: 'cat-5',
        },
        {
            title: 'Digital Worlds',
            image: 'cat-1',
        },
        {
            title: 'Domain Name',
            image: 'cat-4',
        },
        {
            title: 'Collectibles',
            image: 'cat-3',
        },
    ]
    return (

        <div className="w-[100] lg:w-[90%] md:mx-auto gap-5 flex justify-between  flex-col p-4">

            <SectionHead body="Browse Categories" />

            <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
                {catData.map((item) => ((
                    <div key={item.image} className="cat hover:border-[#fff] flex  items-center bg-[#140c20] rounded-lg justify-center gap-5 flex-col p-5 hover:border-solid cursor-pointer  ">
                      
                            <img className="hover:text-[blue]" src={`/image/${item.image}.svg`} alt={item.image} />
                            <p className="text-[15px]">{item.title}</p>
                      
                    </div>
                )))}
            </div>



        </div>

    );
}

export default Categories;