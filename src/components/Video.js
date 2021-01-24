import React from 'react'

function Video() {
    return (
        <div className="w-full overflow-hidden h-60 sm:h-screen flex sm:top-12 top-8 left-0 bg-black">
            {/*<video className='self-center' loop autoPlay muted={true}*/}
            {/*       src='https://video.chrisgoerler.com/sbbannervideo.mp4'></video>*/}
            <video className='self-center' loop autoPlay muted={true}
                   src='https://sbc.nyc3.digitaloceanspaces.com/iostry2.mov'></video>
        </div>
    );
}

export default Video;