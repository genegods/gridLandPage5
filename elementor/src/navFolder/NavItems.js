import React from 'react'
import { NavItemData } from '../data/NavItemData'
import { NavLink } from 'react-router-dom'

const NavItems = () => {
  // handle normal and active links
  const activeLink = 'font-bold bg-gray-200 shadow-lg grid border-b-4 border-red-900'
  const normalLink = ''
  return (
    <React.Fragment>
    <section>
      <div className="bg-white h-16 text-3xl grid grid-cols-2 place-items-center uppercase">
        {
          NavItemData.map((item, index) => {
            return(
              <div key={index}>
                <NavLink to={item.path}
                   className={({ isActive }) =>
                   isActive ? activeLink : normalLink
                 }
                >
                  <p className='px-28 py-3'>{item.title}</p>
                </NavLink>
              </div>
            )
          })
        }
      </div>
    </section>
  </React.Fragment>
  )
}

export default NavItems