import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './component/Navbar'
import Middlebody from "./component/Middlebody";
import Body from "./component/Body"
import Footer from './component/Footer';
import { Projects } from './component/Projects';
import Working from './component/Working';
import Wannawork from './component/Wannawork';
import Comment from './component/Comment'
import Page from './component/Page'
import Home from './component/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container" style={{ backgroundColor: '#d4d1cd' }}>
          <Body />
          <Middlebody />
          <Projects />
          <Working />
          <Wannawork />
          <Comment />
          <Switch>
            <Route exact path='/'></Route>
            <Router exact path='/WorkInProgress' component={Page}></Router>
            <Router component={Home}></Router>
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
