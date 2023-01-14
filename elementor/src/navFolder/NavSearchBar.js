import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const NavSearchBar = () => {
  return (
    <React.Fragment>
      <section>
        <div className="mt-5 px-10 relative">
          <div className="absolute top-3 left-14">
            <AiOutlineSearch className="text-3xl" />
          </div>
          <div>
            <input
              placeholder="Search items"
              className="w-full h-14 rounded-lg pl-16 text-2xl"
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default NavSearchBar;
