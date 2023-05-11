import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiCheckCircle } from "react-icons/fi";

const ModalUpgrade = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div>
      <div className="modal min-w-[60%] sm:w-[90%] md:max-w-[60%] lg:max-w-[45%] bg-black text-white">
        <div className="flex justify-between border-b border-[#4d4d4e] p-[0.8rem]">
          <h3 className="text-[0.975rem] font-bold">Your plan</h3>
          <button className="text-[1.4rem] text-[#D9D9E3]" onClick={onClose}>
            <AiOutlineClose />
          </button>
        </div>
        <div className="flex flex-col md:flex-row-reverse text-left justify-center w-[98%]">
          <div className="w-[100%] md:min-w-[50%] pl-5">
            <h3 className="pt-5 text-[1.2rem] font-semibold pb-4">
              ChatGPT Plus<span className="text-[#8e8ea0]"> USD $20/mo</span>
            </h3>
            <button
              className="text-center p-[0.8rem] text-[0.8rem] w-[96%] font-semibold rounded-[6px] bg-[#10a37f] hover:bg-[#1A7F64] focus:border-4 focus:border-[#D9D9E3] focus:outline-3 focus:outline-[#10a37f] mb-1"
              autoFocus
            >
              <a href="https://pay.openai.com/c/pay/cs_live_a1DiiycTGJ74x3Gs6ySnLuic57a893HpN3AwhE6beG6imWEcnrUE7d2VYY#fidkdWxOYHwnPyd1blppbHNgWjA0TUp3VnJGM200a31Cakw2aVFEYldvXFN3fzFhUDZjU0pkZ3xGZk5XNnVnQE9icEZTRGl0Rn1hfUZQc2pXbTRdUnJXZGZTbGpzUDZuSU5zdW5vbTJMdG5SNTVsXVR2b2o2aycpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYCkndXdgaWpkYUNqa3EnPydMa3Fgdyd4JSUl">
                Upgrade plan
              </a>
            </button>
            <h5 className="flex gap-2 text-[0.8rem] font-light py-2">
              <span className="text-[1.2rem] text-[#1a7960]">
                <FiCheckCircle />
              </span>{" "}
              Available even when demand is high
            </h5>
            <h5 className="flex gap-2 text-[0.8rem] font-light py-2">
              <span className="text-[1.2rem] text-[#1a7960]">
                <FiCheckCircle />
              </span>{" "}
              Faster response speed
            </h5>
            <h5 className="flex gap-2 text-[0.8rem] font-light py-2">
              <span className="text-[1.2rem] text-[#1a7960]">
                <FiCheckCircle />
              </span>{" "}
              Priority access to new features
            </h5>
            <a
              href="https://help.openai.com/en/collections/3943089-billing"
              className="block text-[0.8rem] py-4 underline font-light"
            >
              I need help with a billing issue
            </a>
          </div>
          <div className="w-[100%] md:min-w-[50%] border-t md:border-r md:border-t-0 md:h-[42vh] pr-3 md:pr-5 pl-5 md:pl-3 border-[#4d4d4e]">
            <h3 className="pt-5 text-[1.2rem] font-semibold pb-4">Free plan</h3>
            <button className="w-full text-center p-[0.9rem] text-[0.8rem] text-[#201F1F] font-bold rounded-[6px] bg-[#8e8ea0] mb-1 cursor-not-allowed">
              Your current plan
            </button>
            <h5 className="flex gap-2 text-[0.8rem] font-light py-2">
              <span className="text-[1.2rem] text-[#8e8ea0]">
                <FiCheckCircle />
              </span>{" "}
              Available when demand is low
            </h5>
            <h5 className="flex gap-2 text-[0.8rem] font-light py-2">
              <span className="text-[1.2rem] text-[#8e8ea0]">
                <FiCheckCircle />
              </span>{" "}
              Standard response speed
            </h5>
            <h5 className="flex gap-2 text-[0.8rem] font-light py-2">
              <span className="text-[1.2rem] text-[#8e8ea0]">
                <FiCheckCircle />
              </span>{" "}
              Regular model updates
            </h5>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default ModalUpgrade;
