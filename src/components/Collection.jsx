import SectionHead from "../utils/SectionHead";



const Collection = () => {
    
    const collData = [
        {
            frontImg: "nft-2",
            backOne: 'option-1',
            backTwo: 'option-2',
        },
        {
            frontImg: "nft-3",
            backOne: 'option-1',
            backTwo: 'option-2',
        },
        {
            frontImg: "nft-2",
            backOne: 'option-1',
            backTwo: 'option-2',
        },
    ]


    return ( 
        <div className="w-[100] lg:w-[90%] md:mx-auto gap-5 flex justify-between  flex-col p-4">

            <SectionHead body="Trending Collection" />
            <p className="text-[#fff] text-[22px]">Checkout our weekly updated trending collection.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center"> 

                {collData.map(item=>((
                    <div className="flex flex-col gap-5 justify-center" key={item.frontImg}>
                        <img className="rounded-lg" src={`/image/${item.frontImg}.png`} alt={item.frontImg} />
                        <div className="flex flex-row items-center justify-between">
                        <img className="rounded-lg" src={`/image/${item.backOne}.png`} alt={item.frontImg} />
                        <img className="rounded-lg" src={`/image/${item.backTwo}.png`} alt={item.frontImg} />
                        <div className="w-[118px] h-[118px] flex items-center justify-center font-bold rounded-lg bg-[#A259FF] text-[#fff]">1025+</div>
                        </div>
                    </div>
                )))}


            </div>

        </div>
    
        );
}
 
export default Collection;