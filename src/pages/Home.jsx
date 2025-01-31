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
        <div>
            
        </div>
    </div>
  )
}

export default Home