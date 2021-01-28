import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Video from "../components/Video";
import About from "../components/About";
import Footer from "../components/Footer";
// import Loading from "../components/LoadingScreen";


function Home() {
    return (
        <div className='bg-black'>
            <Nav/>
            <Header/>
            <Video/>
            <About/>
            <Footer/>
        </div>
    );
}

export default Home;