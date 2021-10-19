import React from 'react'
import MovieHero from '../components/movieHero/MovieHero.Component';
import castPosters from '../config/castPosters.config';
import Posters from '../config/crewPosters.config';
//import arrow button


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiCameraMovie } from "react-icons/bi";

import PosterSlider from '../components/PosterSlider/castPosterSlider';


const launchRazorPay = () => {
    let options = {
        key: "rzp_test_vlN9MkaWuTukah",
        amount: 500 * 100,
        currency: "INR",
        name: "Book My Show Clone",
        description: "Movie Purchase on Rental",
        image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
        handler: () => {
            alert("Payment Done")
        },
        theme: { color: "#c4242d" }
    };
    let rzp = new window.Razorpay(options);
    rzp.open();
};


export default function Movie() {


    return (
        <>
            

            <MovieHero />
           
            <div className='my-12 container  px-4 lg:w-1/2 lg:ml-64 md:w-full md:mx-auto ' >
                <div className='flex flex-col items-start gap-3' >
                    <h2 className='text-gray-800 font-bold text-2xl'>About the movie</h2>
                    <p>Shang-Chi and The Legend of The Ten Rings features Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film is directed by Destin Daniel Cretton and produced by Kevin Feige and Jonathan Schwartz.</p>
                </div>
                <div className='my-8' >
                    <hr />

                </div>


                <div className='flex flex-col items-start gap-3'>
                    <h1 className='text-xl'>Applicable offers</h1>

                    <div className='flex items-start gap-2 bg-yellow-100 border-yellow-400 border-2 border-dashed  rounded-md p-3 w-96' >
                        <div className='w-8 h-8' >
                            <BiCameraMovie className='w-full h-full' />

                        </div>
                        <div className='flex flex-col items-start'>
                            <h3 className='text-gray-800 text-lg'>
                                Filmy Pass
                    </h3>
                            <p className='text-gray-600 text-sm' >
                                Get Rs 75* off on 3 movies you buy/rent on stream. Buy Filmy pass at Rs.99.
                    </p>
                        </div>

                    </div>
                </div>
                <button onClick={launchRazorPay} class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded">
                            Book tickets
                </button>
                <div className='my-8' >
                    <hr />

                </div>


                <div>
                    <h2 className='text-gray-800 font-bold text-2xl'>Cast</h2>

                    <PosterSlider images={castPosters} isDark={false} />

                </div>
                <div className='my-8' >
                    <hr />

                </div>

                <div>
                    <h2 className='text-gray-800 font-bold text-2xl'>Crew</h2>

                    <PosterSlider images={Posters} isDark={false} />

                </div>
                <div className='my-8' >
                    <hr />

                </div>
            </div>





        </>
    )
}
