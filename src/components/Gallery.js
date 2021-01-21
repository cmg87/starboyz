import React from 'react';
import {picArray} from "../images/final/pics"

function Gallery() {
    const pics = picArray
    return (
        <div id="gallery" className='bg-black pt-40 grid sm:grid-cols-3 gap-2.5 grid-rows-1'>
                {pics.map(x => <div className='card hover:scale-125 transition duration-500 transform element hover:z-20 justify-self-center'>
                    <img src={x} alt="" className='w-80 h-80 object-cover'/>
                </div>)}
        </div>
    )
}

export default Gallery;