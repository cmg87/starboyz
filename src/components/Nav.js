import React from 'react'


function Nav() {
    return (
        <div className="top-0 left-0 text-gray-200 absolute flex justify-around w-full pt-2 font-sb">
            {/*<ul className='flex justify-around'>*/}
            {/*    <li className='inline'><a href=""><span>Home</span></a></li>*/}
            {/*    <li className='inline'><a href=""><span>Our Story</span></a></li>*/}
            {/*    <li className='inline'><a href="https://store.starboyz.us"><span>Store</span></a></li>*/}
            {/*</ul>*/}
            <div className="inline"><a href="#"><span>Home</span></a></div>
            <div className="inline"><a href="#"><span>Our Story</span></a></div>
            <div className="inline"><a href="#"><span>Gallery</span></a></div>
            <div className="inline"><a href="https://store.starboyz.us"><span>Store</span></a></div>
        </div>
    );
}

export default Nav;