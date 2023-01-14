import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { Routes, Route } from "react-router-dom";
import ElementPage from "../pages/ElementPage";
import GlobalPage from "../pages/GlobalPage";

const Hero = () => {
  return (
    <React.Fragment>
      <section>
        <div className="px-14">
          <div className="text-2xl flex justify-between my-5">
            <p>Basic</p>
            <AiOutlineCaretDown />
          </div>

          {/* card section */}
          <div>
            <Routes>
              <Route path="/" element={<ElementPage />} />
              <Route path="/global" element={<GlobalPage />} />
            </Routes>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;
