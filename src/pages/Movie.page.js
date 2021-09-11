import React from 'react'
import MovieHero from '../components/movieHero/MovieHero.Component';
import { BiCameraMovie } from "react-icons/bi";
export default function Movie() {
    return (
        <>
            <MovieHero />
            <div className='my-12 container  px-4 lg:w-1/2 lg:ml-64' >
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
                <div className='my-8' >
                    <hr />

                </div>


                <div className='flex flex-col items-start gap-3' >
                    <h2 className='text-gray-800 font-bold text-2xl'>Cast</h2>
                    <div className='flex gap-3'>
                        <div className='w-32 flex flex-col items-center '>
                            <img className='rounded-full' src="https://2.bp.blogspot.com/-nES5Tj1Yw7w/WVxGCpVDMdI/AAAAAAAEMBI/q4401mSfM9IklUBzWMQ1-nFRBnsx3QnNwCLcBGAs/s1600/a9e4edfaa7d04a13217074b34e97da65.jpg" alt="cast" />
                            <p className='font-bold' >Simu Liu</p>
                            <p className='text-gray-800' >as Shang-Chi</p>
                        </div>
                        <div className='w-32 flex flex-col items-center '>
                            <img className='rounded-full' src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/awkwafina-1093500-20-06-2018-12-05-44.jpg" alt="cast" />
                            <p className='font-bold' >Awkwafina</p>
                            <p className='text-gray-800' >as Katy</p>
                        </div>
                        <div className='w-32 flex flex-col items-center '>
                            <img className='rounded-full' src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/tony-leung-iein105711-02-04-2018-13-07-58.jpg" alt="cast" />
                            <p className='font-bold' >Tony Leung Chiu-wai</p>
                            <p className='text-gray-800' >as Wenwu/The Mandarin</p>
                        </div>
                        <div className='w-32 flex flex-col items-center '>
                            <img className='rounded-full' src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/michelle-yeoh-1473-24-03-2017-17-32-23.jpg" alt="cast" />
                            <p className='font-bold' >Michelle Yeoh</p>
                            <p className='text-gray-800' >as Jiang Nan</p>
                        </div>
                    </div>
                </div>
                <div className='my-8' >
                    <hr />

                </div>
            </div>



            
            
        </>
    )
}
