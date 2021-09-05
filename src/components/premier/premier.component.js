import React from 'react';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../HeroCarousal/Arrows.component';
import Poster from '../poster/poster.component';

export default function Premier() {
    const settings={
        infinite: true,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        InitialSilde:0,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>

    };

    const premierImages=[
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            alt:"The Balkan Line",
            title:"The Balkan Line",
            subtitle:"English",
            isDark:false
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            alt:"The Balkan Line",
            title:"The Balkan Line",
            subtitle:"English",
            isDark:false
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            alt:"The Balkan Line",
            title:"The Balkan Line",
            subtitle:"English",
            isDark:false
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            alt:"The Balkan Line",
            title:"The Balkan Line",
            subtitle:"English",
            isDark:false
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            alt:"The Balkan Line",
            title:"The Balkan Line",
            subtitle:"English",
            isDark:false
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            alt:"The Balkan Line",
            title:"The Balkan Line",
            subtitle:"English",
            isDark:false
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            alt:"The Balkan Line",
            title:"The Balkan Line",
            subtitle:"English",
            isDark:false
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            alt:"The Balkan Line",
            title:"The Balkan Line",
            subtitle:"English",
            isDark:false
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            alt:"The Balkan Line",
            title:"The Balkan Line",
            subtitle:"English",
            isDark:false
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            alt:"The Balkan Line",
            title:"The Balkan Line",
            subtitle:"English",
            isDark:false
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            alt:"The Balkan Line",
            title:"The Balkan Line",
            subtitle:"English",
            isDark:false
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            alt:"The Balkan Line",
            title:"The Balkan Line",
            subtitle:"English",
            isDark:false
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            alt:"The Balkan Line",
            title:"The Balkan Line",
            subtitle:"English",
            isDark:false
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            alt:"The Balkan Line",
            title:"The Balkan Line",
            subtitle:"English",
            isDark:false
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            alt:"The Balkan Line",
            title:"The Balkan Line",
            subtitle:"English",
            isDark:false
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            alt:"The Balkan Line",
            title:"The Balkan Line",
            subtitle:"English",
            isDark:false
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            alt:"The Balkan Line",
            title:"The Balkan Line",
            subtitle:"English",
            isDark:false
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            alt:"The Balkan Line",
            title:"The Balkan Line",
            subtitle:"English",
            isDark:false
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            alt:"The Balkan Line",
            title:"The Balkan Line",
            subtitle:"English",
            isDark:false
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            alt:"The Balkan Line",
            title:"The Balkan Line",
            subtitle:"English",
            isDark:false
        }

    ]


    return (
        <>
    <div className="flex flex-col items start py-4 " >
        <h3 className="text-white text-xl font-bold" >Premiers</h3>
        <p className="text-white text-sm pb-4">Brand new release every friday</p>
            <Slider {...settings} >
{                premierImages.map((image)=>(
                        <Poster  {...image}  isDark={true }  />
                ))}
            </Slider>
        </div>
        </>
    )
}
