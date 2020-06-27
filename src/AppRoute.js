import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Navbar'
import Middlebody from "./component/Middlebody";
import Body from "./component/Body"
import Footer from './component/Footer';
import { Projects } from './component/Projects';
import Working from './component/Working';
import Wannawork from './component/Wannawork';
import Comment from './component/Comment'


class AppRoute extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <div className="container" style={{ backgroundColor: '#d4d1cd' }}>
                    <Body />
                    <Middlebody />
                    <Projects />
                    <Working />
                    <Wannawork />
                    <Comment />
                </div>
                <Footer />
            </div>

        );
    }
}

export default AppRoute;
