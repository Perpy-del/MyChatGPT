import React from "react";
import { BiData } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const ModalSettings = ({ show, onClear }) => {
  if (!show) return null;
  return (
    <>
      <div className="modal2 min-w-[95%] md:min-w-[50%] md:min-h-[65%] py-6">
        <div className="flex justify-between items-center px-4">
          <h2 className="font-semibold text-[1.1rem]">Settings</h2>
          <button className="text-[1.2rem] text-[#D9D9E3]" onClick={onClear}>
            <AiOutlineClose />
          </button>
        </div>
        <div className="mt-6 border-t border-[#383838] pt-4">
          <div className="bg-[#26272c] flex justify-between mx-4 p-1 rounded-[7px] mb-5">
            <button
              className="flex gap-2 text-[0.85rem] font-light justify-center items-end focus:bg-[#343541] py-2 rounded-[7px] w-[50%]"
              autoFocus
            >
              <span>
                <FiSettings className="text-lg" />
              </span>
              <h4>General</h4>
            </button>
            <button className="flex gap-2 text-[0.85rem] font-light justify-center items-end focus:bg-[#343541] py-2 rounded-[7px] w-[50%]">
              <span>
                <BiData className="text-lg" />
              </span>
              <h4>Data controls</h4>
            </button>
          </div>
          <div className="flex items-center justify-between mx-4 text-[0.85rem] font-light">
            <h3>Theme</h3>
            <select className="bg-[#1f1c1c] p-3 text-center outline-none border border-[#4d4d4e]">
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
