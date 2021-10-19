import Poster from '../poster/poster.component';

import settings from '../../config/PosterCarausel.config';
import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

export default function PosterSlider(props) {
    return (
        <>
            <div className="flex flex-col items start py-4 " >
                <h3 className={`${props.isDark ? 'text-white' : 'text-gray-800'} text-xl font-bold `}>{props.title}</h3>
                <p className={`${props.isDark ? 'text-white' : 'text-gray-800'} text-sm pb-4`}>{props.subtitle}</p>
                <Slider {...settings} >
                    {props.images.map((image) => (
                        <Link to="/movie/123">
                            <Poster  {...image} isDark={props.isDark} />
                        
                        </Link>
                    ))}
                </Slider>
            </div>
        </>
    )
}
