import React from 'react'
import bannerVideo from '../videos/sbbannervideo.mp4'



function Video() {
    return (
        <div className="w-full overflow-hidden h-60 sm:h-120 flex top-0 left-0 absolute -z-10 bg-black">
            <video className='self-center' loop autoPlay muted={true} src={bannerVideo}></video>
        </div>
    );
}

export default Video;