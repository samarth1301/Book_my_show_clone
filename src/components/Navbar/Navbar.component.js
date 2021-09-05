import React from 'react';
import { BiChevronDown, BiChevronRight, BiMenu, BiSearch } from "react-icons/bi";

const NavSm = () => {
    return (
        <>
            <div className="text-white flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold">IT ALL STARTS HERE!</h3>
                    <span className="text-gray-400 text-xs flex items-center">
                        Itarsi <BiChevronRight />
                    </span>
                </div>
                <div className="w-8 h-8">
                    <BiSearch className="w-full h-full" />
                </div>
            </div>
        </>
    )
};


const NavMd = () => {
    return (
        <div className="w-full flex items-center bg-white gap-3 rounded-md px-3 py-2">
            <BiSearch />
            <input type="search" className="w-full focus:outline-none" placeholder="Search for movies, plays, sports, and activities" />
        </div>
    )
};

const NavLg = () => {
    return (
        <div className="container flex items-center justify-between mx-auto px-4">
            <div className="flex items-center w-1/2">
                <div className="w-12 h-12 ">
                    <img src="" alt="logo" className="w-full h-full" />
                </div>
                <div className="w-full flex items-center bg-white gap-3 rounded-md px-3 py-2">
                    <BiSearch />
                    <input type="search" className="w-full focus:outline-none" placeholder="Search for movies, plays, sports, and activities" />
                </div>
            </div>
            <div className="flex items-center gap-3">
                    <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer">
                        Itarsi <BiChevronDown />
                    </span>
                    <button className="bg-red-600 text-white text-sm rounded px-2 py-1">Sign in</button>
                    <div className="w-8 h-8">
                        <BiMenu className="w-full h-full text-white"/>
                    </div>
            </div>
        </div>
    )
};

const Navbar = () => {
    return (
        <>
            <nav className="bg-navCol-800 p-4">
                <div className="md:hidden" >
                    {
                        /*Mobile Screen*/
                        <NavSm />
                    }

                </div>
                <div className="hidden lg:hidden md:flex" >
                    {
                        /*Tablet Screen*/
                        <NavMd />

                    }
                </div>
                <div className="hidden lg:flex" >
                    {
                        /*PC Screen*/
                        <NavLg />

                    }
                </div>
            </nav>
        </>
    )
}


export default Navbar;