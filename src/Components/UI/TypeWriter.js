import React from 'react';
import Typed from 'react-typed';


function TypeWriter() {


    return (
        <>
            <Typed
                strings={["Designer.", "Developer.", "Programmer.", "Freelancer."]}
                typeSpeed={100}
                backSpeed={50}
                loop
            />   
      </>
    )
}

export default TypeWriter
