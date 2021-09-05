import React from 'react'
//props src, title, sub-title, isDark(boolean)
export default function Poster(props) {
    return (
        <>
        <div className="flex flex-col items-start gap-2 px-3 ">
        <div className="h-50">
        <img src={props.src} alt={props.title} className="w-full h-full rounded-xl"/>
        </div>

        <h3 className={`text-lg font-bold ${
            props.isDark?"text-white":"text-gray-700"
        }`}>
            {props.title}
            </h3>
        <p
        className={`text-md font-bold ${
            props.isDark?"text-white":"text-gray-700"
        }`}
        >{props.subtitle}</p>
        </div>
            
        </>
    )
}
