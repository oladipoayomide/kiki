import { useState } from "react";
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';

const NavbarItem = ({ title, classProps }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}

const Navbar = () => {

    const [MenuStatus, setMenuStatus] = useState(false);
    const handleMenu = () => {
        setMenuStatus(prevStatus => !prevStatus);
    }


    return (
        <nav className='w-[100] md:w-[90%] md:mx-auto gap-3 flex  justify-between items-center p-4'>
            <div className='flex w-[20%] flex-row justify-center items-center'>
                <img src='/image/logo.png' alt="logo" className='w-[69px] cursor-pointer' />
                <h1 className="font-bold text-[40px]">Kiki</h1>
            </div>
            <div className='text-white lg:hidden list-none flex-col justify-between items-center text-[32px]'>
                {!MenuStatus && <HiMenuAlt4 onClick={handleMenu} />}
                {
                    MenuStatus && <ul className='z-20 fixed md:hidden list-none flex-col top-0 text-[16px] text-center -right-2 p-3 w-[70vw] h-screen shadow-2xl justify-start rounded-md blue-glassmorphism text-white animate-slide-in leading-normal '>

                        <li><AiOutlineClose onClick={handleMenu} /></li>
                        <div className='text-right gap-3 flex flex-col'>
                         
                            {["Explore", "Create",].map((item, index) => {
                                return <NavbarItem key={item + index} title={item} />
                            })}
                              <div className='bg-[#A259FF] py-2 px-7 mx-4 rounded-lg text-center cursor-pointer hover:bg-[#6528b5]'>
                            Connect Wallet
                        </div>
                        </div>
                      
                    </ul>
                }
            </div>
            <ul className='text-white gap-5 lg:flex hidden list-none flex-row justify-between items-center flex-initial font-light'>
                <li><div className="flex flex-row justify-between gap-4 items-center border-[#A259FF80] border-2 rounded-lg py-2  px-5"><input className="search-input" type="text" placeholder="Search items, collection, accounts" />
                    <BiSearch color="#A3B2C8" /></div>
                </li>
                {["Explore", "Create",].map((item, index) => {
                    return <NavbarItem key={item + index} title={item} />
                })}

            </ul>
            <div className='bg-[#A259FF] py-2 hidden lg:flex  px-7 mx-4 rounded-lg cursor-pointer hover:bg-[#6528b5]'>
                Connect Wallet
            </div>
        </nav>
    );
}

export default Navbar;
