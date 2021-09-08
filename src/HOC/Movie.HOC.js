//Transforms component into another component
//Adding additional functionalities 

import {Route} from "react-router-dom";

//Layouts
import MovieLayout from"../layouts/MovieLayout";
export default function MovieHOC({component:Component,...rest}) {
    //component == temp as Component
    // rest -> path exact
    return (
        <>
        
           
            <Route 
            {...rest} 
            component= {(props)=>(
                <MovieLayout>
                  <Component {...props} /> {/* //temp */}
                  
                  {/* {<rest.Component/>} other way of doing the same thing */}
                </MovieLayout>
            )

            }
            />
        </>
    )
}
