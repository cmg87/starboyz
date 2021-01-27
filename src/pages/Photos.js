import React, { useEffect } from 'react'
import Nav from "../components/Nav";
import Gallery from "../components/Gallery";
import arrow from "../images/arrow-up-solid.svg";

const iconStyle = {
    "-webkit-filter": "invert(100%)",
    "filter": "invert(100%)",
}



function Photos(){

    function handleScroll(e) {
        e.preventDefault();
        window.scrollTo({top:0, let:0, behavior:"smooth"})
    }


    return(
        <div className='bg-black'>
            <Nav/>
            <Gallery/>
            <div className='flex flex-col justify-center place-items-center pt-12'>
                <a href="#nav" onClick={handleScroll}><img src={arrow} style={iconStyle} className='h-20 w-20' alt="arrow"/></a>
                <p className='text-white'>back to top</p>
            </div>
        </div>
    )
}

export default Photos
