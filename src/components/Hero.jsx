import Button from "../utils/Button";
import NftCard from "../utils/NftCard";
import SemiBold from "../utils/SemiBold";
import nftImage from '../image/nft-1.png';
import secondNft from '../image/nft-2.png';

const Hero = () => {

    const heroData = [{
        id: 1,
        num: '240k+',
        title: "Total Sale"
    }, {
        id: 2,
        num: '100k+',
        title: "Auctions"
    }, {
        id: 3,
        num: '240k+',
        title: "Artists"
    }]

    return (
        <div className="w-[100] lg:w-[90%] md:mx-auto gap-5 flex justify-between items-center flex-col lg:flex-row p-4">

            <div className="flex w-[100%] lg:w-[55%] flex-col gap-5">
                <SemiBold body="Discover digital art & Collect NFTs" />
                <p className="text-[#fff] text-[22px]">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
                <div className="flex flex-row gap-3">
                    <Button text="Explore" color="#fff" bg="#A259FF" hoverBg="#6528b5" />
                    <Button text="Create" color="#fff" hoverBg="#6528b5"
                    classProps="bg-[#A259FF1C]" />

                </div>
               


            </div>

            <div className="relative flex flex-col justify-center items-center " >
                <div className="bg_gradient  -z-10 " />
                <img src="/image/hero-bg.png" alt="" />

                <div className="absolute top-10 left-12 z-10">
                    <NftCard
                    nftPrice = "30.6 ETH"
                    nftName = "Humanoid #04"
                    owner_tag = "@kikis"
                    image={nftImage}
                    timeLeft="24h:01m:03s"  
                    />
                </div>

                <div className="absolute top-7 left-10 trx">
                    <NftCard
                    nftPrice = "30.6 ETH"
                    nftName = "Humanoid #04"
                    owner_tag = "@kikis"
                    image={secondNft}
                    timeLeft="24h:01m:03s"  
                    />
                </div>


                <div className="grid grid-cols-3 gap-5">
                    {heroData.map((item) => ((
                        <div className="flex flex-col gap-1" key={item.id}>
                            <h1 className="text-[#A259FF] font-bold text-[28px] space_mono">{item.num}</h1>
                            <p className="">{item.title}</p>
                        </div>
                    )))}

                </div>

            </div>
        </div>



    );
}

export default Hero;