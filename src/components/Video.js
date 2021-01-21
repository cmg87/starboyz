import React from 'react'
import bannerVideo from '../videos/sbbannervideo.mp4'



function Video() {
    return (
        <div className="w-full overflow-hidden h-60 sm:h-screen flex sm:top-12 top-8 left-0 bg-black">
            <video className='self-center' loop autoPlay muted={true} src={bannerVideo}></video>
        </div>
    );
}

export default Video;