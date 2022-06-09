import React from "react";

// import skill data
import { skills } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles.css";
import { Pagination, Navigation } from "swiper";
const Skills = () => {
  return (
    <section className="bg-primary py-12">
      <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3  text-center">
        My Skills
      </h2>
      <>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={4}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className=""
        >
          {skills.map((skill, index) => {
            return (
              <SwiperSlide key={index} className="bg-transparent">
                <img
                  className="w-fit bg-transparent"
                  src={skill.image}
                  alt=""
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
      {/* <div className="container mx-auto">
        <div className="grid grid-cols-8 md:grid-flow-col">
          {skills.map((skill, index) => {
            return (
              <div className="flex items-center justify-center" key={index}>
                <img className="lg:h-20" src={skill.image} alt="" />
              </div>
            );
          })}
        </div>
      </div> */}
    </section>
  );
};

export default Skills;
