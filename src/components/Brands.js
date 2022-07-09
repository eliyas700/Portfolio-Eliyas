import React from "react";

// import brands data
import { brands } from "../data";

const Brands = () => {
  return (
    <section className="min-h-[146px] bg-[#bdc3c7] flex items-center">
      <div className="container mx-auto flex md:justify-between items-center flex-wrap justify-evenly">
        {brands.map((brand, idx) => {
          return (
            <div key={idx}>
              <a href={brand?.href} target="_blank">
                <img width={"160px"} src={brand.img} alt="" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
