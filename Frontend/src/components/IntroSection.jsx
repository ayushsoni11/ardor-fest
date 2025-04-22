import React from 'react'
import Navbar from './Navbar'
import IntroMiddlepart from './IntroMiddlepart'
import Wave from './Wave'

const IntroSection = () => {
    return (
        <div className=' sm:max-w-[97vw] w-full sm:min-h-screen relative sm:mx-5 sm:mt-5 sm:rounded-t-3xl bg-[var(--bluebg)]  sm:h-[100vh] h-[80vh]  '>
            <Navbar />
            <IntroMiddlepart />
            <Wave />

        </div>
    )
}

export default IntroSection
