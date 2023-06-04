import { FaEthereum } from 'react-icons/fa'
const NftCard = ({ nftPrice, nftName, owner_tag, image, timeLeft }) => {


    return (
        <div className="w-[380px] flex flex-col glass_morphism justify-center h-[516px] p-5 border-[#b23fff65] border-2">
            <div className="justify-between flex mb-2">
                <h1 className='font-bold text-[20px]'>{nftName}</h1>
                <p className='text-[16px]'>{owner_tag}</p>
            </div>
            <img className='rounded-sm' src={image} alt={image} />
            <div className="grid mt-2 grid-cols-2 justify-between">
                <p>Current Bid</p>
                <p className='text-right'>Time Remaining</p>
                <div className='flex flex-row items-center'>
                    <FaEthereum color="#B33FFF" /> <h1 className='font-bold text-[#09D3FF]'>{nftPrice}</h1>
                </div>
                <h1 className='font-bold text-[#09D3FF] text-right'>{timeLeft}</h1>
            </div>
        </div>
    );
}

export default NftCard;
