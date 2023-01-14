import React from 'react'
import Navbar from '../navFolder/Navbar'
import Hero from './Hero'

const MainPage = () => {
  return (
    <React.Fragment>
    <section>
      <div className="md:w-1/3 md:mx-auto bg-gray-200">
        <Navbar/>
        <Hero/>
      </div>
    </section>
  </React.Fragment>
  )
}

export default MainPage