import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiCheckCircle } from "react-icons/fi";

const ModalUpgrade = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div>
      <div className="modal max-w-[60%] bg-black text-white">
        <div className="flex justify-between border-b border-[#4d4d4e] p-[0.8rem]">
          <h3 className="text-[0.975rem] font-bold">Your plan</h3>
          <button className="text-[1.4rem] text-[#D9D9E3]" onClick={onClose}>
            <AiOutlineClose />
          </button>
        </div>
        <div className="flex flex-row-reverse text-left justify-between px-[0.8rem]">
          <div>
            <h3>ChatGPT Plus</h3>
            <span>USD $20/mo</span>
            <a href="https://pay.openai.com/c/pay/cs_live_a1DiiycTGJ74x3Gs6ySnLuic57a893HpN3AwhE6beG6imWEcnrUE7d2VYY#fidkdWxOYHwnPyd1blppbHNgWjA0TUp3VnJGM200a31Cakw2aVFEYldvXFN3fzFhUDZjU0pkZ3xGZk5XNnVnQE9icEZTRGl0Rn1hfUZQc2pXbTRdUnJXZGZTbGpzUDZuSU5zdW5vbTJMdG5SNTVsXVR2b2o2aycpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYCkndXdgaWpkYUNqa3EnPydMa3Fgdyd4JSUl">
              Upgrade plan
            </a>
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
            <a href="https://help.openai.com/en/collections/3943089-billing">
              I need help with a billing issue
            </a>
          </div>
          <div>
            <h3>Free plan</h3>
            <button>Your current plan</button>
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
