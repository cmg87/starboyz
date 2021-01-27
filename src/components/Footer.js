import React from 'react';
import fbIcon from '../images/facebook-square-brands.svg'
import gramIcon from '../images/instagram-brands.svg'
import ytIcon from '../images/youtube-brands.svg'

const iconStyle = {
    "-webkit-filter": "invert(100%)",
"filter": "invert(100%)",
}

function Footer(){
    return(
        <div id="footer" className='sm:mt-24 mt-10 flex flex-row justify-center pt-20 pb-20'>
        <span className='pl-4 pr-4'><a href="https://www.facebook.com/starboyz/"><img style={iconStyle} src={fbIcon} className='h-16 w-16' alt="facebook icon"/></a></span>
        <span className='pl-4 pr-4'><a href="https://www.instagram.com/starboyzstunts/"><img style={iconStyle} src={gramIcon} className='h-16 w-16' alt="instagram icon"/></a></span>
        <span className='pl-4 pr-4'><a href="https://www.youtube.com/c/Starboyzstunts"><img style={iconStyle} src={ytIcon} className='h-16 w-16' alt="youtube icon"/></a></span>
        </div>
    )
}

export default Footer;