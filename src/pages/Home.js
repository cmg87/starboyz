import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Video from "../components/Video";
import Lorem from "../components/Lorem";
import About from "../components/About";
import Gallery from "../components/Gallery";

function Home() {
    return (
        <div className='bg-black'>
            <Nav/>
            <Header/>
            <Video/>
            <About/>
            <Gallery/>
            <Lorem/>
        </div>
    );
}

export default Home;