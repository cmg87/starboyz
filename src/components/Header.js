import React  from 'react'

function Header() {

    return (
        <div id={'header'}  className="bg-gray-900 w-full sm:h-screen h-60 sm:mt-12 mt-8 flex justify-center items-center opacity-50 z-20 absolute left-0">
            <div className='underline text-gray-400 sm:text-9xl text-4xl text-opacity-75 font-sb'>StarBoyz</div>
        </div>
    );
}

export default Header;