import React from 'react'
import Image from 'react-bootstrap/Image'

export const Projects = () => {
    return (
        <div className="card my-4">
            <div className="text-center my-4">
                <h2>Work</h2>
                <p style={{ fontFamily: "Maven pro", fontSize: '1.2em' }}>Here are my few Projects</p>
            </div>
            <div className='row mx-1 my-2'>
                <div className='col-lg-6 col-sm-12'>

                    <h3>Contact Keeper</h3>
                    <p class="platform">WEB</p>
                    <p style={{ color: 'rgb(255, 138, 89)' }}><i class="fa fa-desktop px-2"></i><i class="fa fa-tablet px-3"></i><i class="fas fa-mobile-alt"></i></p>
                    <p>This web application is used to store your phone contacts(secured)<br></br>
                              You need to register your self first then after registering, you can save your contacts both personal and professional.</p>
                    <a className="btn btn-danger my-2" target="_blank" href="#">Visit Website</a>

                </div>

                <div className='col-lg-6 col-sm-12 col-xs-12'>
                    {/* <img src="https://www.tutorialrepublic.com/lib/images/javascript-illustration.png" class="img-responsive" alt="java script" style={{ width: '350px', height: '250px' }}></img> */}
                    <Image src="https://www.tutorialrepublic.com/lib/images/javascript-illustration.png" fluid />
                </div>
            </div>
            <div className='row mx-1 my-2'>
                <div className='col-lg-6 col-sm-12'>
                    {/* <img src="https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg" class="img-responsive" alt="java script" style={{ width: '350px', height: '250px' }}></img> */}
                    <Image src="https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg" fluid />
                </div>
                {/* <div class="imgwrapper">
                    <img src="https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg"
                        class="img-responsive" alt="Responsive image"
                        width="450" height="250" />
                </div> */}
                <div className='col-lg-6 col-sm-12'>

                    <h3>IT Login</h3>
                    <p class="platform">WEB</p>
                    <p style={{ color: 'rgb(255, 138, 89)' }}><i class="fa fa-desktop px-2"></i><i class="fa fa-tablet px-3"></i><i class="fas fa-mobile-alt"></i></p>
                    <p>As a guest you can see the companies IT login web-page<br></br>
                              After registration, you can be a member of company, and company keeps login and logout record of every employees</p>
                    <a className="btn btn-danger my-2" target="_blank" href="#">Visit Website</a>
                </div>
            </div>
            <div className='row mx-1 my-2'>
                <div className='col-lg-6 col-sm-12'>

                    <h3>Github Finder</h3>
                    <p class="platform">WEB</p>
                    <p style={{ color: 'rgb(255, 138, 89)' }}><i class="fa fa-desktop px-2"></i><i class="fa fa-tablet px-3"></i><i class="fas fa-mobile-alt"></i></p>
                    <p>So this is Basic web application of React<br></br>
                      I used github API to fatch github user to display on my web-page also displaying all repos of user</p>
                    <a className="btn btn-danger my-2" target="_blank" href="#">Visit Website</a>

                </div>
                <div className='col-lg-6 col-sm-12'>
                    {/* <img src="https://www.tutorialrepublic.com/lib/images/javascript-illustration.png" class="img-responsive" alt="java script" style={{ width: '350px', height: '250px' }}></img> */}
                    <Image src="https://www.tutorialrepublic.com/lib/images/javascript-illustration.png" fluid />
                </div>
            </div>
        </div>
    )
}
