import React from 'react';
import { BiChevronDown, BiMenu, BiSearch, BiShareAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';

const NavSm = () => {
    return (
        <>
            <div className="text-white flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold">IT ALL STARTS HERE!</h3>
                </div>
                <div className="w-8 h-8">
                    <BiShareAlt className="w-full h-full" />
                </div>
            </div>
        </>
    )
};




const NavLg = () => {
    return (
        <div className="container flex items-center justify-between mx-auto px-4">
            <div className="flex items-center w-1/2">
                <Link to="/">
                    <div className="w-25 h-12 pr-2 ">
                        <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="logo" className="w-full h-full" />
                    </div>
                </Link>
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

const MovieNavbar = () => {
    return (
        <>
            <nav className=" absolute inset-x-0 z-30 bg-opacity-10
             backdrop-filter backdrop-blur-lg lg:relative bg-navCol-800 px-4 py-2">
                <div className="md:hidden" >
                    {
                        /*Mobile Screen*/
                        <NavSm />
                    }

                </div>
                <div className="hidden lg:hidden md:block" >
                    {
                        /*Tablet Screen*/
                        <NavSm />

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


export default MovieNavbar;