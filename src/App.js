import './App.css';
import React from 'react'
import Home from './pages/Home'

const ua = window.navigator.userAgent;

function App() {
  console.log(ua);
  return (
    <div className="App">
    <Home/>
    </div>
  );
}

export default App;
