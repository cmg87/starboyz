import './App.css';
import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Photos from "./pages/Photos";


function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" navbar={<Nav/>} component={Home} />
          <Route exact path="/gallery" navbar={<Nav/>} component={Photos} />
          <Route exact path="/#about" navbar={<Nav/>} component={Home} />
        </Switch>
      </Router>
  );
}

export default App;
