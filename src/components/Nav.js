import React from 'react'


function Nav() {
    return (
        <div className="top-0 left-0 text-gray-200 absolute flex md:justify-around w-full pt-2 font-sb z-10">
            <div className="inline"><a href="#"><span>Home</span></a></div>
            <div className="inline"><a href="#"><span>Our Story</span></a></div>
            <div className="inline"><a href="#"><span>Gallery</span></a></div>
            <div className="inline"><a href="https://store.starboyz.us"><span>Store</span></a></div>
        </div>
    );
}

export default Nav;