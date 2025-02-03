import React from 'react'
import Navbar from '../components/Navbar'
import "./Home.css"
const Home = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className='section-1'>
                <div className='main-heading'>

                    <h1>REDEFINING PERSONAL AVIATION</h1>
                    <p>Elevate your travel experience with ElectraX, where innovation meets legacy in our flagship aircraft. Designed for pioneers who dare to dream, we’re soaring into the future of flight.</p>
                </div>
                <div className='section-1-img-container'>
                    <img className='section-1-img' src="/img-1.avif" alt="" />
                </div>
            </div>
            <div className='section-2'>
                <p className='section-2-upper'>Precision Engineering at Its Finest</p>
                <h2>Aerodynamics Redefined</h2>
                <div className='section-2-inner'>
                    <p>
                        Our aircraft’s streamlined design is a product of relentless innovation, reducing drag and enhancing speed and efficiency. Every curve, every detail is crafted to ensure optimal performance in all flight conditions.
                    </p>
                </div>
            </div>
            <div className='section-3'>
                <div className='section-3-left'>
                    <h2 className='section-3-left-top-heading'>Cutting-Edge Materials</h2>
                    <div className='section-3-left-bottom'>
                        <h2 className='section-3-left-bottom-heading'>Advanced Propulsion Technology</h2>
                        <p className='section-3-left-bottom-para'>Powered by next-generation engines, our aircraft offer unrivaled efficiency and power. Whether you choose electric or hybrid propulsion, you’ll experience seamless acceleration and impressive range.
                        </p>
                    </div>
                </div>
                <div className='section-3-right'>
                    <div className='section-3-right-upper'>
                        <img src="/img-3.avif" alt="" />
                        <div className='section-3-right-upper-text'>
                            <h1>Cutting-Edge Materials</h1>
                            <p>Constructed from advanced lightweight materials, ElectraX aircraft maximize durability while minimizing weight, improving both fuel efficiency and overall performance.
                            </p>
                        </div>
                    </div>
                    <div className='section-3-right-lower'>
                        <img src="/img-4.avif" alt="" />
                        <div>
                            <h1> Engineered for the Future
                            </h1>
                            <p>From the propulsion system to the aerodynamic body, each element is designed to push the boundaries of what’s possible in personal aviation. It’s not just a plane—it’s a masterpiece of engineering.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section-4'>
                <h2>At ElectraX, we blend the timeless elegance of the iconic Electra with cutting-edge technology to create personal aircraft that redefine the skies. Our mission is to honor aviation history while pioneering the future of personal flight.</h2>
            </div>
            <div className='section-5'>
                <div className='section-5-left'>
                    <h1>A New Heights of Precision</h1>
                </div>
                <div className='section-5-right'><p>Our aircraft’s streamlined design is a product of relentless innovation, reducing drag and enhancing speed and efficiency. Every curve, every detail is crafted to ensure optimal performance in all flight conditions.</p></div>
            </div>
            <div className='section-6'>
                <img src="/img-6.avif" alt="" />
                <img src="/img-4.avif" alt="" />
                <img src="/img-7.avif" alt="" />
            </div>
            <div className="section-7">
                <div className="section-7-left">
                    <div className="section-7-left-heading">

                        <p>Heritage Meets Innovation</p>
                        <h2>Heritage Meets Innovation</h2>
                    </div>
                    <div className='section-7-left-bullet'>
                        <h3>Aerodynamic Perfection</h3>
                        <p>The sleek, streamlined shape of our aircraft is engineered for superior aerodynamics, reducing drag and improving fuel efficiency. This careful balance of form and function allows for smoother, further, faster flying that ever before.</p>
                    </div>
                    <div className='section-7-left-bullet'>
                        <h3>Iconic Design Meets Modern Technology</h3>
                        <p>Inspired by aviation's golden era, the ElectraX model showcases iconic design elements paired with cutting-edge technology. From the gleaming exterior our aircrafts are a testament to excellence.</p>
                    </div>
                </div>
                <div className="section-7-right">
                    <img src="/img-8.avif" alt="" />
                </div>

            </div>
            <div className='section-8'>
                <div
                    className='section-8-left'>
                    <img src="/img-9.avif" alt="" />
                </div>
                <div className='section-8-right'>
                    <p>Our Story</p>
                    <h2>Learn About Our Mission</h2>
                    <p>From weather updates to navigational data, ElectraX ensures seamless transmission of critical information. With real-time flight tracking you’ll receive vital data instantly.</p>
                    <a href="about">Read About Us</a>
                </div>
            </div>
            <div className='section-9'>
                <div className='section-9-heading'>
                    <h1>News & Resources</h1>
                    <a href="news">News & Resources</a>
                </div>
                <div className='section-9-news'>
                    <div className="section-9-img-1">
                        <p>Aviation and Globalization</p>
                    </div>
                    <div className="section-9-img-2">
                        <p>Safety Standards in Aviation</p>
                    </div>
                    <div className="section-9-img-3">
                        <p>Breakthrough in Material Science</p>
                    </div>
                </div>
            </div>
            <div className="section-10">
                <div className='section-10-inner'>
                    <div>

                        <p>The Future of Personal Aviation</p>
                        <h1>Experience the Next Era of Flight</h1>
                    </div>
                    <button>Discover the Electrax</button>
                </div>
            </div>
            <div className="section-11">
                <div className="top-footer">
                    <div>
                        <h1>Join Our Newsletter</h1>
                        <p>We’ll send you a nice letter once per week. No spam.</p>
                    </div>
                    <div>
                        <input type="text" placeholder='Enter Your Email'/>
                        <span><button>Subscribe</button></span>
                        <p>We care about your data in our <a href="/privacy-policy">privacy policy</a>.</p>
                    </div>
                </div>
                <div className="mid-footer">
                    <div className='mid-left'>
                        <h1>ELECTRAX</h1>
                        <h4>About Us</h4>
                        <p>We blend the timeless elegance of the iconic Electra with cutting-edge technology to create personal aircraft that redefine the skies. Our mission is to honor aviation history while pioneering the future of personal flight.</p>
                    </div>
                    <div className='mid-right'>
                      <div>
                      <h3>Product</h3>
                      <ul>
                        <li><a href="home">Home</a></li>
                        <li><a href="airplane">ElectraX Airplane</a></li>
                      </ul>
                      </div>
                      <div>
                      <h3>Company</h3>
                      <ul>
                        <li><a href="about">About Us</a></li>
                        <li><a href="about">Careers</a></li>
                        <li><a href="about">News</a></li>
                        <li><a href="about">Contact</a></li>
                      </ul>
                      </div> 
                      <div>
                        <h3>Other Pages</h3>
                        <ul>
                            <li><a href="licences">Licences</a></li>
                            <li><a href="licences">Style Guide</a></li>
                            <li><a href="licences">Change Log</a></li>
                            <li><a href="licences">404 page</a></li>
                            <li><a href="licences">Protected Page</a></li>
                        </ul>
                        </div> 
                        
                       
                    </div>
                </div>
                <div className="lower-mid">
                    <h2>Follow Us</h2>
                    <a href='/'><img src="/linkedin.svg" alt="" /></a>
                    <a href='/'><img src="/twitte.svg" alt="" /></a>
                    <a href='/'><img src="/instagram.svg" alt="" /></a>
                    <a href='/'><img src="/youtube.svg" alt="" /></a>
                    <a href='/'><img src="/facebook.svg" alt="" /></a>
                </div>
                <div className='end-footer'>
                    <div>
                        <a href="/">Licenses</a>
                        <a href="/">Style Guide</a>
                        <a href="/">Change Log</a>
                    </div>
                    <div>
                        <a href="/">Made By Sumit</a>
                        <p>Powered By ReactJs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home