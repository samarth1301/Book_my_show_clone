//Transforms component into another component
//Adding additional functionalities 

import React from 'react'
import {Route} from "react-router-dom";

//Layouts
import DefaultLayout from"../layouts/Default.layout";
export default function DefaultHOC({component:Component,...rest}) {
    //component 
    // props -> path exact
    return (
        <>
            <Route 
            {...rest} 
            component= {(props)=>(
                <DefaultLayout>
                  <Component {...props} />
                  {/* {<rest.Component/>} other way of doing the same thing */}
                </DefaultLayout>
            )

            }
            />
        </>
    )
}
