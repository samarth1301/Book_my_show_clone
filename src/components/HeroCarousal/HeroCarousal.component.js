import React,{useState,useEffect} from 'react'
import HeroSlider from "react-slick";
import axios from 'axios';
//import arrow button

import { NextArrow , PrevArrow } from "./Arrows.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroCarousal() {

    const [images, setimages] = useState([]);
    useEffect(() => {
        const requestNowPlayingMovies=async()=>{
            const getImages=await axios.get('/movie/now_playing');
            setimages(getImages.data.results);

        }
        requestNowPlayingMovies();
    }, []);
    


    const settingsLg={
        arrows:true,
        autoplay: true,
        centerMode: true,
        centerPadding:"300px",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        nextArrow: <NextArrow/>,
        prevArrow:<PrevArrow/>
    }
    var settings = {
        arrows:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow:<PrevArrow/>
      };
     
    return (
        <>

        <div className="lg:hidden" >
            
        <HeroSlider {...settings} >
            {
                    images.map((image)=>(
                        <div className="w-full h-64 py-3 md:h-80">
                            <img src={`https://image.tmdb.org/t/p/original/${image.backdrop_path}`} alt="Caraousel" className="w-full h-full rounded-md"/>
                        </div>
                    ))
            }
         </HeroSlider>         

        </div>



        <div className="hidden lg:block" >

        <HeroSlider {...settingsLg} >
            {
                    images.map((image)=>(
                        <div className="w-full h-96 px-1 py-3 focus:border-0 border-transparent ">
                             <img src={`https://image.tmdb.org/t/p/original/${image.backdrop_path}`} alt="Caraousel" className="w-full h-full rounded-md"/>
                        </div>
                    ))
            }
         </HeroSlider>         

        </div>




        </>
    );
}
