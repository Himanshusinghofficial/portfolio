import React from 'react'

const Middlebody = () => {
    return (
        <div className="card" style={{ marginTop: "20px" }}>
            <div class="card-body">
                <div>
                    <h2 class="text-center">My Experience</h2>
                    <p class="text-center tag-line" style={{ fontFamily: "Maven pro", fontSize: '1.2em' }}>Specialist in need. Generalist at heart.</p>
                </div>
                <div class="row text-center my-5">
                    <div className="col-md-4">
                        <i class="fas fa-laptop fa-3x" style={{ color: 'rgb(255, 138, 89)' }}></i>
                        <h3 className='my-3'>Front-end</h3>
                        <ul style={{ padding: "0px" }}>
                            <li>Html(5)</li>
                            <li>Css(3)</li>
                            <li>Javascript</li>
                            <li>Jquery</li>
                            <li>Bootstrap</li>
                            <li>React</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <i class="fas fa-database fa-3x" style={{ color: 'rgb(255, 138, 89)' }}></i>
                        <h3 className='my-3'>Back-end</h3>
                        <ul style={{ padding: "0px" }}>
                            <li>NodeJS</li>
                            <li>NPM</li>
                            <li>Express</li>
                            <li>SQL</li>
                            <li>Mongo</li>
                            <li>Mongoose</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <i class="fas fa-star fa-3x" style={{ color: 'rgb(255, 138, 89)' }}></i>
                        <h3 className='my-3'>Tools</h3>
                        <ul style={{ padding: "0px" }}>
                            <li>VS Code</li>
                            <li>WebStorm</li>
                            <li>Github</li>
                            <li>Heroku</li>
                        </ul>
                    </div>
                    {/* <div class="small-12 medium-4 columns text-center experience-topics " >

                    </div>
                    <div class="small-12 medium-4 columns text-center experience-topics">

                    </div>
                    <div class="small-12 medium-4 columns text-center experience-topics" >
                       
                    </div> */}
                </div>
            </div>
        </div>

    )
}


export default Middlebody
