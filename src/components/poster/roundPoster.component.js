import React from 'react'
//props src, title, sub-title, isDark(boolean)
export default function roundPoster(props) {
    return (
        <>
        <div className="flex flex-col items-start gap-2 px-3 ">
        <div className="h-50">
        <img src={props.src} alt={props.title} className="w-full h-full rounded-full"/>
        </div>

        <h3 className={` text-center text-lg font-bold ${
            props.isDark?"text-white":"text-gray-700"
        }`}>
            {props.title}
            </h3>
        <p
        className={`text-center text-md  ${
            props.isDark?"text-white":"text-gray-700"
        }`}
        >{props.subtitle}</p>
        </div>
            
        </>
    )
}
