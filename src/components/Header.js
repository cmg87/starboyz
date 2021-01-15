import React , {useEffect, useRef} from 'react'

function Header() {

    const inputRef = useRef(null);
    useEffect(() => {
        const height = inputRef.current.offsetHeight;
        console.log('Input height', height);
    }, [inputRef]);

    return (
        <div id={'header'} ref={inputRef} className="bg-gray-900 w-full sm:h-120 h-60 flex justify-center items-center opacity-50">
            <div className='underline text-gray-400 sm:text-9xl text-4xl text-opacity-75 font-sb'>StarBoyz</div>
        </div>
    );
}

export default Header;