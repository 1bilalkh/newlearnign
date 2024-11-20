import React from 'react'

import Allprops from "./Allprops";


function Work() {
  return (
            <>
                <p>{5+5}</p>
                <Allprops heading="John" content="this is a content" />
                <Allprops heading="andy" content="this is a andy content" />
                <Allprops heading="smith" content="this is a smith content" />
                <ChildComponent>
                <h2>This is passed as children!</h2>
                </ChildComponent>
            </>
  )
}

// eslint-disable-next-line react/prop-types
const ChildComponent = ({children, second, third}) =>{
    

    return(
        <>
            <h3>this is a heading</h3>
            {children ="heading"}
            {second ="heading two"}
            {third ="heading three"}
        </>

    )
}




export default Work