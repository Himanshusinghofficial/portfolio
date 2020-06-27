import React from 'react'
import { Link } from 'react-router-dom'

const User = () => {
    // render() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top " style={{ backgroundColor: '#e33d53' }}>
            <div className="container">
                <h2>
                    <Link to="/home"><i className="fas fa-user-graduate" style={{ color: 'white' }} > Portfolio</i></Link>
                </h2>

                <div className="text-right">

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation" style={{ borderColor: 'white' }}>
                        <span class="navbar-toggler-icon"></span>
                    </button>


                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav  mr-auto mt-2 mt-lg-0" >
                            <li class="nav-item" style={{ margin: '0 12px 0 12px', textAlign: 'center' }}>
                                <Link class="nav-link:hover" to='/home' style={{ color: 'white' }}><i class="fas fa-home fa-lg"></i><div className=" align-bottom" style={{ fontSize: '14px' }}>Home</div></Link>
                            </li>
                            <li class="nav-item" style={{ margin: '0 12px 0 12px', textAlign: 'center' }}>
                                <Link class="nav-link:hover" to="/about" style={{ color: 'white' }}><i class="fas fa-address-card fa-lg"></i><div className=" align-bottom" style={{ fontSize: '14px' }}>About</div></Link>
                            </li>
                            <li class="nav-item" style={{ margin: '0 12px 0 12px', textAlign: 'center' }}>
                                <Link class="nav-link:hover" to="/skills" style={{ color: 'white' }}><i class="fas fa-briefcase fa-lg"></i><div className=" align-bottom" style={{ fontSize: '14px' }}>Skills</div></Link>
                            </li>
                            <li class="nav-item" style={{ margin: '0 12px 0 12px', textAlign: 'center' }}>
                                <Link class="nav-link:hover" to='/comment' style={{ color: 'white' }}><i class="fas fa-comment fa-lg"></i><div className=" align-bottom" style={{ fontSize: '14px', }}>view</div></Link>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0" >
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button class="btn my-2 my-sm-0" type="submit" style={{ borderColor: 'white', color: 'white' }}>Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav >


    )

    // }

}

export default User


//#4c6d86

