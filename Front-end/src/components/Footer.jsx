import React from 'react';
import './Footer.css';
import {FaFacebook, FaHome, FaMailBulk, FaPhone, FaLinkedin} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
        <div className='footercontainer'>
        {/* Left container */}
          <div className='left'>
            <div className='location'>
                <FaHome size={30} style={{color:'white', marginRight:'2rem'}}></FaHome>
                <p>Unwal Gorakhpur, Uttarpadesh.</p>
                
            </div>
            <div className='phone'>
                <h4><FaPhone size={30} style={{color:'white', marginRight:'2rem'}}></FaPhone>
                 8160-9404-77</h4>
            </div>
            <div className='email'>
                <h4><FaMailBulk size={30} style={{color:'white', marginRight:'2rem'}}></FaMailBulk>
                 rajkumarnishad947@gmail.com</h4>
            </div>
          </div>
            
        {/* Right container */}
          <div className='right'>
            <h4>Social_Media Contact </h4><br></br>
            <div className='social'>
            <FaFacebook size={30} style={{color:'white', marginRight:'2rem'}}></FaFacebook> 
            <FaLinkedin size={30} style={{color:'white', marginRight:'2rem'}}></FaLinkedin>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Footer