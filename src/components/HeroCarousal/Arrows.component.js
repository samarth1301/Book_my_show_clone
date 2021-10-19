import React from 'react';

export const NextArrow=(props)=>{
    // const{className,style,onClick}=props;
    return(
        <>
        <div className={props.className}
        style={{ ...props.style,
            backgroundColor: "rgba(39, 40, 34, 0.5)",
           
           
            borderRadius:"6px",
            
            padding:'0.4rem',
            
            width:"2rem",
            height:"2rem"
        }}
        onClick={props.onClick}
        />
        </>
    )
}

export const PrevArrow=(props)=>{
    // const{className,style,}
    return(
        <>
        
            <div className={props.className}
            style={{ ...props.style,
                backgroundColor: "rgba(39, 40, 34, 0.5)",
               
                display:"flex",
                borderRadius:"6px",
                
                justifyContent:"center",
                alignItems:"center",
                width:"2rem",
                height:"2rem"
            }}
            onClick={props.onClick}
            />
        </>
    )
}
