import React, { useEffect, useState, useRef} from 'react'
import "./nav.css"

function Nav() {

    // const [scrolled,setScrolled]=useState(false);
    // const handleScroll=() => {
    //     const offset=window.scrollY;
    //     if(offset > 240 ){
    //         setScrolled(true);
    //     }
    //     else{
    //         setScrolled(false);
    //     }
    // }
    //
    // useEffect(() => {
    //     window.addEventListener('scroll',handleScroll)
    // })
    // let x=[];
    // if(scrolled){
    //     x.push('sticky bg-black pb-2');
    // }

    return (
        <div className='top-0 left-0 text-gray-200 fixed sm:h-12 h-8 bg-black flex justify-around w-full pt-2 font-sb z-30'>
            <div className="inline"><a href="#"><span>Home</span></a></div>
            <div className="inline"><a href="#about"><span>Our Story</span></a></div>
            <div className="inline"><a href="#gallery"><span>Gallery</span></a></div>
            <div className="inline"><a href="https://store.starboyz.us"><span>Store</span></a></div>
        </div>
        
    );
}

export default Nav;