import React from 'react'
import HeroCarousal from '../components/HeroCarousal/HeroCarousal.component'


//components

import Navbar from '../components/Navbar/Navbar.component'
export default function DefaultLayout(props) {
    return (
       <>
            {/* <h1 className="text-xl">Default layout page</h1> */}
            <Navbar/>
            <HeroCarousal/>
            {props.children}
        </>
    );
};
