import React from 'react'
import ReactPlayer from 'react-player'
import bannerVideo from '../videos/sbbannervideo.mp4'


function Video() {
    return (
        <div className="w-full overflow-hidden h-120 flex top-0 left-0 absolute -z-10">
            {/*<ReactPlayer playing={true} loop={true} width={1080} url={bannerVideo} />*/}
            <video className='self-center' loop autoPlay muted={true} src={bannerVideo}></video>
        </div>
    );
}

export default Video;