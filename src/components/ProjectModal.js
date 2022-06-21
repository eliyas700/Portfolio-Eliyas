import React from "react";
import { TbWorld } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
const ProjectModal = ({ portfolio }) => {
  return (
    <div>
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal ">
        <div class="modal-box relative bg-primary">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex justify-between items-center mx-7">
            <h3 class="text-lg font-bold text-[#f6f6f6]">
              {portfolio?.item?.name}
            </h3>
            <ul className="flex">
              <li className="mr-2">
                <a
                  title="Click To Visit"
                  target="_blank"
                  href={portfolio?.item?.live}
                >
                  <TbWorld size={32} color="#f6f6f6" />
                </a>
              </li>
              <li>
                <a
                  title="Click to see the Code"
                  href={portfolio?.item?.code}
                  target="_blank"
                >
                  <BsGithub size={28} color="#f6f6f6" />
                </a>
              </li>
            </ul>
          </div>
          <p class="py-4">{portfolio?.item?.about}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
