import React from 'react'
import { Link } from 'react-router-dom'

const Working = () => {
    return (
        <div className="card">
            <div className="text-center" style={{ margin: '20px' }}>
                <h1>Working</h1>
                <p className="mx-5" style={{ fontSize: '1.2em' }}>In the last couple of years, I am working on skils of my web Development using MERN STACK. Above are some of the domains I've done work within...</p>
            </div>
            <div className="row mx-2 my-4">
                <div className="col-lg-4  col-sm-12 text-center">
                    <h3>Development</h3>
                    <p style={{ color: 'rgb(255, 138, 89)' }}><i class="fa fa-desktop px-2"></i><i class="fa fa-laptop px-3"></i></p>
                    <span>FULL Stack</span><br></br>
                    <span>MEAR Stack</span><br></br>
                    <span>NodeJs(BE)</span><br></br>
                    <span>ReactJs(FE)</span><br></br>
                    <br></br>
                    <Link className="btn btn-danger" to='/Comment'>Visit Website</Link>


                </div>
                <div className="col-lg-4 col-sm-12 text-center">
                    <h3>Programming</h3>
                    <p style={{ color: 'rgb(255, 138, 89)' }}><i class="fa fa-desktop px-2"></i><i class="fa fa-laptop px-3"></i></p>
                    <span>Java(Advance)</span><br></br>
                    <span>C++(basic)</span><br></br>
                    <span>Data Structure</span><br></br>
                    <span>Algorithm</span><br></br>
                    <br></br>
                    <Link className="btn btn-danger" to='/skills'>Visit Website</Link>


                </div>
                <div className="col-lg-4 col-sm-12 text-center">
                    <h3>Competitive Programming</h3>
                    <p style={{ color: 'rgb(255, 138, 89)' }}><i class="fa fa-desktop px-2"></i><i class="fa fa-laptop px-3"></i></p>
                    <span>LeetCode</span><br></br>
                    <span>Codechef</span><br></br>
                    <span>HackerRank/GeeksforGeeks</span><br></br>
                    <span>HackerBlocks</span><br></br>
                    <br></br>
                    <Link className="btn btn-danger" to='/comment'>Visit Website</Link>


                </div>
            </div>
        </div>
    )
}

export default Working;