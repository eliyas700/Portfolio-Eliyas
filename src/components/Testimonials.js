import React, { useEffect, useState } from "react";

// import components
import TestiSlider from "./TestiSlider";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block">
            What other people say
          </h2>
          <p className="w-[100vw] mb-16 lg:mb-24">
            "We all need people who will give us feedbacks. That's how we
            improved."
            <span className="block text-xs">
              -Bill Gates <br />
              Founder,Microsoft{" "}
            </span>
          </p>
        </div>
        <TestiSlider />
      </div>
    </section>
  );
};

export default Testimonials;
