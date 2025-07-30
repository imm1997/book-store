import { href, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import "tailwindcss";
import avatarImg from  "../assets/avatar.png"
import { useState } from "react";

const navigation = [
    {name: "Dashboard", href:"/dashboard"},
    {name: "Oders", href:"/order"},
    {name: "Cart Page", href:"/cart"},
    {name: "Check Out", href:"/chekout"},
]

const Navbar = () => {
    
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    console.log(isDropdownOpen)

    const currentUser = true; //true=user false=icons
    return(
        <header className="max-w-screen-2xl mx-auto px-4 py-6">
            <nav className="flex justify-between items-center">
                {/*left side */}
                <div className="flex items-center md:gap-16 gap-4">
                    <Link to="/">
                    <FaBars className="size-6"/>
                    </Link>


                    <div className="relative sm:w-72 w-40 space-x-2">
                        <FaSearch className="absolute inline-block left-3 inset-y-2"/>
                        <input type="text" placeholder="Search here" className="bg-[#dddddd] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"/>
                    </div>
                </div>


                {/*rigth side */}
                <div className="relative flex items-center md:space-x-3 space-x-2">
                    <div>
                        {
                            currentUser ? <>
                            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                <img src={avatarImg} alt="" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''}`} />
                            </button>
                            {/*show dropdowns */}
                            {
                                isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                                        <ul className="py-2">
                                            {
                                                navigation.map((item) => (
                                                    <li key={item.name} onClick={() => setIsDropdownOpen}>
                                                        <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-300">
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                )
                            }
                            </> : <Link to="/login"><FaUser className="size-6"/></Link>
                        }
                    </div>

                    <button className="hidden sm:block">
                        <FaHeart className="size-6"/>
                    </button>

                    <Link to="/cart" className="bg-[#FFCE1A] p-1 sm:px-6 px-2 flex items-center rounded-sm">
                        <FaShoppingBag className="size-6"/>
                        <span className="text-sm font-bold sm:ml-1">0</span>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;