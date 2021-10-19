import React from 'react'
//props src, title, sub-title, isDark(boolean)
export default function Poster(props) {
    return (
        <>
        <div className="flex flex-col items-start gap-2 px-3 ">
        <div className="h-50">
        <img src={`https://image.tmdb.org/t/p/original/${props.poster_path}`} alt={props.original_title} className="w-full h-full rounded-xl"/>
        </div>

        <h3 className={`text-lg font-bold ${
            props.isDark?"text-white":"text-gray-700"
        }`}>
            {props.title}
            </h3>
        {props.release_date && <p
        className={`text-md font-bold-sm ${
            props.isDark?"text-white":"text-gray-700"
        }`}
        >In cinemas from {props.release_date}</p>}
        {props.overview && <p
        className={`text-sm ${
            props.isDark?"text-white":"text-gray-500"
        }`}
        >{props.overview.slice(0,50)+'...'}</p>}
        </div>
            
        </>
    )
}
