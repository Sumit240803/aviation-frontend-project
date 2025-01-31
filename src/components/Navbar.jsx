import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav'>
        <div>
            <h1>ELECTRAX</h1>
        </div>
        <div className='right-nav'>
            <span>ElectraX</span>
            <span>About</span>
            <span>Careers</span>
            <span>News</span>
            <span>Contact</span>
        </div>
    </div>
  )
}

export default Navbar