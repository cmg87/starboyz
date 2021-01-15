import React from 'react';

function About() {

    return (
        <div id="about" className='flex justify-center text-center flex-col font-sb mt-40'>
            <div className="text-4xl underline pt-3.5"> Our Story</div>
            <div className="sm:grid-cols-3 sm:grid">
                <div className="text-2xl pt-3.5 sm:col-start-2 sm:col-end-3"> Something nice about the starboyz Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. At, consequuntur deleniti deserunt dolorem earum excepturi labore
                    nobis pariatur totam vel?
                </div>

            </div>
        </div>
    )
}

export default About;
