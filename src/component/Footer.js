import React from 'react'

const Footer = () => {
    return (

        <footer style={{ marginTop: '50px' }}>

            <div style={{ backgroundColor: '#db1428', color: 'white' }}>
                <div class="container">


                    <div class="row py-4 d-flex align-items-center">


                        <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h5 class="mb-0">Get connected with us on social networks!</h5>
                        </div>


                        <div class="col-md-6 col-lg-7 text-center text-md-right">


                            <a class="fb-ic" href="https://www.facebook.com/profile.php?id=100007468666513" rel="noopener noreferrer" target="_blank" style={{ color: "white" }}>
                                <i class="fab fa-facebook-f fa-lg mr-4"> </i>
                            </a>

                            <a class="tw-ic" href="https://twitter.com/Himanshu882677" rel="noopener noreferrer" target="_blank" style={{ color: "white" }}>
                                <i class="fab fa-twitter fa-lg mr-4"> </i>
                            </a>

                            <a class="gplus-ic" href="https://github.com/Himanshusinghofficial" rel="noopener noreferrer" target="_blank" style={{ color: "white" }}>
                                <i class="fab fa-github-alt fa-lg mr-4"> </i>
                            </a>

                            <a class="li-ic" href="https://www.linkedin.com/in/himanshu-singh-216978172/" rel="noopener noreferrer" target="_blank" style={{ color: "white" }}>
                                <i class="fab fa-linkedin-in fa-lg mr-4"> </i>
                            </a>

                            <a class="ins-ic" href="https://www.instagram.com/himanshusingh881042/" rel="noopener noreferrer" target="_blank" style={{ color: "white" }}>
                                <i class="fab fa-instagram fa-lg"> </i>
                            </a>

                        </div>


                    </div>


                </div>
            </div>
            <div style={{ backgroundColor: "#080440", color: 'white' }}>
                <div class="container text-center text-md-left">


                    <div class="row py-4">


                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 class="text-uppercase font-weight-bold">College name</h6>
                            <hr class="accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }}></hr>
                            <p>Govind Ballabh Pant Govt Engineering College New Delhi</p>

                        </div>

                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">


                            <h6 class="text-uppercase font-weight-bold">Courses</h6>
                            <hr class="accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }}></hr>
                            <p>
                                <a href="https://online.codingblocks.com/courses/web-development-online-course" style={{ color: 'white' }}>Coding blocks(fFull Stack)</a>
                            </p>
                            <p>
                                <a href="https://www.udemy.com/course/the-web-developer-bootcamp/" style={{ color: 'white' }}>Udemy(Full Stack)</a>
                            </p>
                            <p>
                                <a href="https://www.udemy.com/course/the-complete-nodejs-developer-course-2/" style={{ color: 'white' }}>Udemy(Nodejs)</a>
                            </p>
                            <p>
                                <a href="https://www.udemy.com/course/modern-react-front-to-back/" style={{ color: 'white' }}>Udemy(React)</a>
                            </p>

                        </div>

                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">


                            <h6 class="text-uppercase font-weight-bold">Useful links</h6>
                            <hr class="accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }}></hr>
                            <p>
                                <a href="https://stackoverflow.com/" style={{ color: 'white' }}>Stackoverflow</a>
                            </p>
                            <p>
                                <a href="https://github.com/" style={{ color: 'white' }}>Github</a>
                            </p>
                            <p>
                                <a href="https://www.heroku.com/" style={{ color: 'white' }}>Heroku</a>
                            </p>
                            <p>
                                <a href="https://developer.mozilla.org/en-US/docs/Web" style={{ color: 'white' }}>MDN(Best Source</a>
                            </p>

                        </div>

                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">


                            <h6 class="text-uppercase font-weight-bold">Contact</h6>
                            <hr class="accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }}></hr>
                            <p>
                                <i class="fas fa-home mr-3"></i> Delhi, PinCode 110071, India</p>
                            <p>
                                <i class="fas fa-envelope mr-3"></i> hs882677@gmail.com</p>
                            <p>
                                <i class="fas fa-phone mr-3"></i> 9968444778</p>

                        </div>


                    </div>


                </div>
            </div>

            <div class="footer-copyright text-center py-3" style={{ backgroundColor: "black", color: "white" }}>© 2020 Copyright :
            <a href="/home" style={{ color: "white" }} > All rights reserved | and made by Himanshu Singh</a>
            </div>


        </footer>

    )
}
export default Footer; 