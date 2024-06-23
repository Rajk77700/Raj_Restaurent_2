import React from 'react'
import About from './About'
// import Services from './Services'
import Contact from './Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
     <section className='maincontainer-home'>
       <div className='herosection-image'>
        <img src='/image1.jpg' alt=''></img>
       </div>
     </section>
     <About></About>
     {/* <Services></Services> */}
     <Contact></Contact>
     <Footer></Footer>
    </>
  )
}

export default Home