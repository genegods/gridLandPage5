import React from 'react'
import NavHeader from './NavHeader'
import NavItems from './NavItems'
import NavSearchBar from './NavSearchBar'

const Navbar = () => {
  return (
    <React.Fragment>
    <section>
      <div>
        <NavHeader/>
        <NavItems/>
        <NavSearchBar/>
      </div>
    </section>
  </React.Fragment>
  )
}

export default Navbar