import React from "react";
import {CgMenu, CgMenuGridR} from 'react-icons/cg'

const NavHeader = () => {
  return (
    <React.Fragment>
      <section>
        <div className="text-3xl flex justify-between items-center px-10 bg-red-900 text-white h-20 ">
          <CgMenu />
          <p>elementor</p>
          <CgMenuGridR />
        </div>
      </section>
    </React.Fragment>
  );
};

export default NavHeader;
