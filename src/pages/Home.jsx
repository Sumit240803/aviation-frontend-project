import React from 'react'
import Navbar from '../components/Navbar'
import "./Home.css"
const Home = () => {
  return (
    <div>
        <div>
            <Navbar/>
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
                <div>
                    <img src="/img-3.avif" alt="" />
                    <div>
                        <h1>Cutting-Edge Materials</h1>
                        <p>Constructed from advanced lightweight materials, ElectraX aircraft maximize durability while minimizing weight, improving both fuel efficiency and overall performance.
                        </p>
                    </div>
                </div>
                <div>
                    <h1> Engineered for the Future
                    </h1>
                    <p>From the propulsion system to the aerodynamic body, each element is designed to push the boundaries of what’s possible in personal aviation. It’s not just a plane—it’s a masterpiece of engineering.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home