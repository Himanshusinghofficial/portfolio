import React, { Component } from 'react'
import Image from './image/mernstack.jpg'

class Body extends Component {
    state = {

        "id": 1,
        "login": "Himanshu Singh",
        "avatar_url": "https://avatars1.githubusercontent.com/u/44048666?s=400&u=19223dad5f2dce20a03807c684bfdf8f431223cf&v=4",
        "html_url": "https://github.com/Himanshusinghofficial",
        "image_add": "https://miro.medium.com/max/900/0*UqGyYmWCRQnjLzSk.jpg"

    }
    render() {
        return (

            <div className='card' style={{ marginTop: "85px" }}>
                <img class="card-img-top " src={Image} alt="Card cap" style={{ height: '350px' }} />
                <div class="card-body">
                    <div className='row'>
                        <div className='col-md-4 sm-4'>
                            <img src={this.state.avatar_url} alt="" className="img-circle" style={{ width: '220px', height: '220px', marginTop: '-130px', marginLeft: '40px' }} />
                            <h3 style={{ fontFamily: 'sans', margin: '10px', paddingLeft: '30px', fontSize: '35px' }}>{this.state.login}  <h5>(B.Tech Computer Science Engineer)</h5></h3>

                        </div>
                        <div className='col-md-8 sm-8'>
                            <h1 style={{ fontFamily: 'monospace', marginTop: '20px' }}><span style={{ backgroundColor: 'rgb(200, 65, 43)' }}
                                class="txt-rotate"
                                data-period="2000"
                                data-rotate='[ "I am full stack web developer!", " Also love Coding!", "React and Nodejs is my fav.", "For me development is fun!" ]'></span>
                            </h1>

                            <div className='text-right' style={{ marginTop: '20px' }}>
                                <h3>(G.B. Pant Govt. Engineering College)</h3>
                                <a href='http://www.gbpec.edu.in/' role="button" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Visit website <i class="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>

                    </div>

                    <div class="small-12 column" style={{ marginTop: '10px' }}>

                        <a href="https://github.com/Himanshusinghofficial" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}><i className="fab fa-github-alt fa-2x" ></i><small>Github</small></a>
                        <a href="https://www.instagram.com/himanshusingh881042/" target="_blank" rel="noopener noreferrer" style={{ color: '#fb3958' }}><i className="fab fa-instagram fa-2x" style={{ padding: '0 0 0 3px' }}></i><small>Instagram</small></a>
                        <a href="https://www.facebook.com/profile.php?id=100007468666513" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}><i className='fab fa-facebook fa-2x' style={{ padding: '0 0 0 3px' }}></i><small>Facebook</small></a>
                        <a href="https://www.linkedin.com/in/himanshu-singh-216978172/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x" style={{ padding: '0 0 0 3px' }}></i><small>Linkedin</small></a>
                    </div>


                </div>

            </div>

        )
    }

}

export default Body;
