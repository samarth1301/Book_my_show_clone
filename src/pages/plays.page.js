import React, { useState, useEffect } from 'react'
import Poster from '../components/poster/poster.component'
import PlaysFilter from '../components/PlaysFilters/PlaysFilters.component';
import axios from 'axios';
export default function Plays() {
    const [plays, setplays] = useState([]);
    useEffect(() => {
        const getPlays = async () => {
            const data = await axios.get('/tv/popular');
            setplays(data.data.results);
        }
        getPlays();
    }, [])
    
    return (
        <>
            <div className='container mx-auto px-4'>

                <div className='w-full lg:flex lg:flex-row-reverse' >
                    <div className='lg:w-8/12' >
                        <h2 className='text-2xl font-bold mb-4'>Plays in Itarsi</h2>
                        <div className='flex flex-wrap' >


                            {plays.map((play) => (
                                <div className='w-1/2 my-3 md:w-1/3 lg:w-1/4' >

                                    <Poster poster_path={play.backdrop_path}
                                        title={play.name} overview={play.overview} />
                                </div>
                            ))}




                        </div>

                    </div>
                    <div className='lg:w-1/4 mx-4' >
                        <h2 className='text-2xl font-bold mb-4'>Filters</h2>
                        <div>
                            <PlaysFilter title="Date" tags={['Today', 'Tomorrow', 'This Weekend']} />
                            <PlaysFilter title="Language" tags={['Tamil', 'Kannada', 'Hindi']} />
                            <PlaysFilter title="Categories" tags={['Theatre']} />
                            <PlaysFilter title="Genres" tags={['Drama', 'Adaptation', 'Historical', 'Online Streaming Plays']} />
                            <PlaysFilter title="More Filters" tags={['Online Streaming', 'Outdoor Events', 'Kids Allowed']} />
                            <PlaysFilter title="Price" tags={['Free', '0-500', '501-2000', 'Above 2000']} />

                        </div>
                    </div>
                </div>




            </div>
        </>
    )
}
