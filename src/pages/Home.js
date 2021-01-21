import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Video from "../components/Video";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Video2 from "../components/Video2";

function Home() {
    return (
        <div className='bg-black'>
            <Nav/>
            <Header/>
            {/*<Video/>*/}
            <Video2/>
            <About/>
            <Gallery/>
        </div>
    );
}

export default Home;