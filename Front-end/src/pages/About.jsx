import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <h2 className='about'><Link to='/about'></Link>About Us</h2>
        <p>Welcome to Raj Restaurant - serving you the best dishes from around the world.</p>
        <div className="content">
          <div className="about-section">
            <h3>Our Story</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat tortor a diam fermentum placerat. Proin eget maximus lectus. Integer ac felis ac velit congue pharetra. Nunc nec nulla id leo vestibulum varius at at metus. Nam pharetra ligula vel dolor vulputate tempor.</p>
          </div>
          <div className="about-section">
            <h3>Our Mission</h3>
            <p>Our mission is to provide delicious and authentic cuisine to our customers, delivered with excellent service and a smile. We strive to create a warm and welcoming atmosphere for all who dine with us.</p>
          </div>
          <div className="about-section">
            <h3>Our Team</h3>
            <p>We have talented chefs and dedicated staff who work tirelessly to bring you the best dining experience possible.</p>
          </div>
        </div>
      </header>
    </div>
    </>
  )
}

export default About