import React from "react";

const Project = ({ item, portfolio, setPortfolio }) => {
  console.log(portfolio, "Project");
  return (
    <div>
      <div
        key={item.id}
        className="flex flex-col items-center text-center mb-9"
      >
        <div className="mb-8">
          <label
            title="Click to See Detail"
            for="my-modal-3"
            onClick={() => setPortfolio({ item })}
            class="modal-button cursor-pointer"
          >
            <img
              className="rounded-2xl w-[380px] h-[380px]"
              src={item.image}
              alt=""
            />
          </label>
        </div>
        <p className="capitalize text-accent text-sm mb-3">{item.category}</p>
        <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
        <p className="text-base max-w-md text-left">
          {item.about.slice(0, 145) + "..."}
          <label
            title="Click to See Detail"
            for="my-modal-3"
            onClick={() => setPortfolio({ item })}
            className="underline ml-2 text-lg  text-accent modal-button cursor-pointer"
          >
            Click To see Details
          </label>
        </p>
      </div>
    </div>
  );
};

export default Project;
