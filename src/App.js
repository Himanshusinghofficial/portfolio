import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './component/Navbar'
// import Middlebody from "./component/Middlebody";
// import Body from "./component/Body"
// import Footer from './component/Footer';
// import { Projects } from './component/Projects';
// import Working from './component/Working';
// import Wannawork from './component/Wannawork';
// import Comment from './component/Comment'
import Page from './component/Page'
import Home from './component/Home'
import AppRoute from './AppRoute'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={AppRoute}></Route>
            <Route exact path='/home' component={AppRoute}></Route>
            <Route exact path='/skills' component={Page}></Route>
            <Route exact path='/comment' component={Page}></Route>
            <Route exact path='/about' component={Page}></Route>
            <Route component={Home}></Route>
          </Switch>
        </div>
      </Router >
    );
  }
}

export default App;
