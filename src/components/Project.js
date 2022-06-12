import React from "react";

const Project = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center mb-9">
      <div className="mb-8">
        <img
          className="rounded-2xl w-[380px] h-[380px]"
          src={item.image}
          alt=""
        />
      </div>
      <p className="capitalize text-accent text-sm mb-3">{item.category}</p>
      <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
      <p className="text-base max-w-md text-left">{item.about}</p>
    </div>
  );
};

export default Project;
