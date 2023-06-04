import SectionHead from "../utils/SectionHead";
import TopCat from "../utils/TopCat";

const TopCategories = () => {

    const topCatData = [
        {
            id: 1,
            firstImg: 'nft-sm-1', secondImg: 'nft-sm-2', thirdImg: 'nft-sm-3', mainNft: 'coll-1', person: 'person-1', nftCategorie: "Cubic Trad",
            itemsLeft: '27 Items'
        },
        {
            id: 2,
            firstImg: 'nft-sm-4', secondImg: 'nft-sm-5', thirdImg: 'nft-sm-6', mainNft: 'coll-2', person: 'person-2', nftCategorie: "Cubic Trad",
            itemsLeft: '27 Items'
        },
        {
            id: 3,
            firstImg: 'nft-sm-7', secondImg: 'nft-sm-8', thirdImg: 'nft-sm-9', mainNft: 'coll-3', person: 'person-3', nftCategorie: "Cubic Trad",
            itemsLeft: '27 Items'
        },
        {
            id: 4,
            firstImg: 'nft-sm-10', secondImg: 'nft-sm-11', thirdImg: 'nft-sm-12', mainNft: 'coll-4', person: 'person-4', nftCategorie: "Cubic Trad",
            itemsLeft: '27 Items'
        }
    ]

    return (
        <div className="w-[100] lg:w-[90%] md:mx-auto gap-5 flex justify-between  flex-col p-4">
            <SectionHead body="Top Categories" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-between">
                {topCatData.map(item => ((
                    <div key={item.id} >
                        <TopCat

                            firstImg={item.firstImg}
                            secondImg={item.secondImg}
                            mainNft={item.mainNft}
                            thirdImg={item.thirdImg}
                            person={item.person}
                            nftCategorie={item.nftCategorie}
                            itemsLeft={item.itemsLeft}
                        />
                    </div>
                )))}
            </div>

        </div>
    );
}

export default TopCategories
