import React from 'react'
import EntertainmentCardSlider from '../components/Entertainment/Entertainment.card.component'
import PosterSlider from '../components/PosterSlider/PosterSlider.component';
import tempPosters from '../config/TempPosters.config';

export default function HomePage() {
    return (
        <>
       <div className="flex flex-col gap-20">
       <div className="container mx-auto px-4" >
            <h1 className="text-2xl font-bold text-gray-800 py-2 ">The best of Entertainment</h1>
            
            <EntertainmentCardSlider/>
        </div>
        <div className="bg-navCol-200 py-16">
           
            <div className="container mx-auto px-4 flex flex-col ">
            <div className="flex">
                <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Rupay" className="w-full h-full"/>
            </div>
            <PosterSlider images={tempPosters} title='Premiere' subtitle='Brand new release every Firday' isDark={true} />
            {/* <Premier /> */}

            </div>
        </div>

       </div>
       <div className="container mx-auto">

       <PosterSlider images={tempPosters} title='Online Streaming Events' subtitle='Brand new release every Firday' isDark={false} />
       <PosterSlider images={tempPosters} title='Outdoor Events' subtitle='Brand new release every Firday' isDark={false} />
       </div>
        </>
    )
}
