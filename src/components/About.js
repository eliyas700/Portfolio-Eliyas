import React from "react";

// import img
import Image from "../assets/ezgif-1-d7736e23a1-removebg-preview.png";

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Eliyas Hossain
              </h2>
              <p className="mb-3 text-accent">
                <span className="font-semibold">React.js Developer</span> at
                Psyber Technologies , India
              </p>
              <small>01-June-2022 to Present</small>
              <hr className="mb-8 opacity-5" />
              <ul className="mb-8">
                <li className="list-disc">
                  Build and develop sites with React.js and Node.js .
                </li>
                <li className="list-disc">
                  Assist the Next.js team to build and run the project.
                </li>
                <li className="list-disc">
                  Responsible for front-end design and development for all
                  projects .
                </li>
              </ul>
            </div>
            <button className="btn btn-md bg-accent hover:bg-secondary-hover transition-all">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
