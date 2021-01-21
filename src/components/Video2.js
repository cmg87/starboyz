import React from 'react'

function Video2(){
    return(
        <div className="w-full overflow-hidden h-60 sm:h-screen flex sm:top-12 top-8 left-0 bg-black">
            <video className='self-center' loop autoPlay muted={true} src='https://video.chrisgoerler.com/sbbannervideo.mp4'></video>
        </div>

    )
}

export default Video2







