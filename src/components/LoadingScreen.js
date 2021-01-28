import React , {useEffect} from 'react';
import {gsap} from 'gsap';


function Loading(){

    useEffect(()=>{
        gsap.fromTo("#loading", {
            opacity: 1},{opacity: 0, duration: 3s
        });
    })

    return(
        <div id="loading"  className='h-screen w-screen bg-black text-white top-0 left-0 absolute z-50 flex justify-center place-items-center text-4xl'>
            <div id="loadtext">...Loading</div>
        </div>
    )
}

export default Loading