import React from "react";
import back_arrow from "../../assets/other-images/backarrow.svg";
import forward_arrow from "../../assets/other-images/forwardarrow.svg";
import first_testimony from "../../assets/homepage_images/Frame 126.svg";
import second_testimony from "../../assets/homepage_images/Frame 136.svg";
import Carousel from "./Carousel/Carousel";

function Testimonials() {
  return (
    <div className="md:flex md:flex-col md:justify-center md:items-center pt-[1rem] pb-[4rem] ">
      <h4 className="md:text-[20px] font-bold text-[18px] text-[#000000] ml-[1rem]">
        Don’t take our word for it
      </h4>
      <div className="flex">
        <img
          classNameName="d-block w-100"
          src={first_testimony}
          alt="firsttestimonial"
        />
        <img
          classNameName="d-block w-100"
          src={second_testimony}
          alt="secondtestimonial"
        />
      </div>
      <div className="flex mt-[1.5rem] ml-[35%]">
        <img src={back_arrow} alt="back-arrow" className="mr-[0.813rem]" />
        <img src={forward_arrow} alt="forward-arrow" className="ml-[0.813rem]" />
      </div>
      <Carousel />
    </div>
  );
}

export default Testimonials;
