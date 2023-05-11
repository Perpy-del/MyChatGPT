import React from "react";
import { BiTrash } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const ModalSettings = ({ show, onClear }) => {
  if (!show) return null;
  return (
    <>
      <div className="modal2 min-w-[95%] md:min-w-[50%] md:min-h-[65%]">
        <div>
          <h2>Settings</h2>
          <button className="text-[1.4rem] text-[#D9D9E3]" onClick={onClear}>
            <AiOutlineClose />
          </button>
        </div>
        <div>
          <div>
            <button>
              <span>
                <BiTrash />
              </span>
              <h4>General</h4>
            </button>
            <button>
              <span>
                <BiTrash />
              </span>
              <h4>Data controls</h4>
            </button>
          </div>
          <div>
            <h3>Theme</h3>
            <select className="bg-black">
              <option>System</option>
              <option>Dark</option>
              <option>Light</option>
            </select>
          </div>
        </div>
        <div>
          <h3>Clear all chata</h3>
          <button>Clear</button>
        </div>
      </div>
      <div className="overlay_settings"></div>
    </>
  );
};

export default ModalSettings;
