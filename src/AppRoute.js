import React, { Component } from 'react';
import './App.css';
import Progress from './Progress';
import Navbar from './component/Navbar'
import Middlebody from "./component/Middlebody";
import Body from "./component/Body"
import Footer from './component/Footer';
import { Projects } from './component/Projects';
import Working from './component/Working';
import Wannawork from './component/Wannawork';
import Comment from './component/Comment'


class AppRoute extends Component {
    state = {
        scrollPostion: 0
    }

    listenToScrollEvent = () => {
        document.addEventListener("scroll", () => {
            requestAnimationFrame(() => {
                this.calculateScrollDistance();
            });
        });
    }

    calculateScrollDistance = () => {
        const scrollTop = window.pageYOffset; // how much the user has scrolled by
        const winHeight = window.innerHeight;
        const docHeight = this.getDocHeight();

        const totalDocScrollLength = docHeight - winHeight;
        const scrollPostion = Math.floor(scrollTop / totalDocScrollLength * 100)

        this.setState({
            scrollPostion,
        });
    }

    getDocHeight = () => {
        return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
    }

    componentDidMount() {
        this.listenToScrollEvent();
    }

    render() {
        return (
            <div className="App">
                <Navbar />
                <Progress scroll={this.state.scrollPostion + '%'} style={{}} />
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
