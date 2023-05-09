import "./normalize.css";
import { BiUser, BiTrash } from "react-icons/bi";
import {
  BsSun,
  BsSend,
  BsArrowRightShort,
  BsLightningCharge,
  BsExclamationTriangle,
  BsBoxArrowUpRight,
} from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  AiOutlinePlus,
  AiOutlineArrowDown,
  AiOutlineClose,
  AiOutlineEllipsis,
} from "react-icons/ai";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";
import ModalUpgrade from "./Components/ModalUpgrade";

function App() {
  const [showNav, setShowNav] = useState(true);
  const [showModal, setShowModal] = useState(false);
  // const [showScroll, setShowScroll] = useState(true);
  const handleNav = () => {
    setShowNav(!showNav);
  };

  const startModal = () => {
    setShowModal(!showModal);
  };

  return (
    // This is the main UI for the page
    <div className="text-white flex items-center text-center scroll-smooth">
      {/* This is for the left side menu/NavBar for Desktop  */}
      <nav className="md:flex md:flex-col md:w-[20%] md:top-0 md:bottom-0 md:left-0 bg-[#202123] p-[10px] fixed">
        {/* For the New Chat Button/Box */}
        <div className="p-[8px] border border-solid border-[#fff3] rounded-[5px] text-start text-[0.8rem] flex items-center hover:bg-[rgba(255,255,255,0.1)] transition-all ease-linear duration-200 cursor-pointer">
          <span className="pl-[6px] pr-[12px] text-[1.5rem]">+</span>
          New chat
        </div>

        {/* This is for the bottom part of the aside section */}
        <div className="absolute bottom-0 text-[0.85rem] border-t border-[#fff3] py-1 cursor-pointer font-medium">
          <div
            className="flex items-center hover:bg-[#343541] transition-all ease-linear duration-200 py-3 rounded-[7px] px-2"
            onClick={startModal}
          >
            <span className="pr-4">
              <BiUser />
            </span>
            Upgrade to Plus
            <span className="ml-[3rem] bg-yellow px-2 py-1 rounded-lg text-[#282c34] font-medium text-xs">
              NEW
            </span>
          </div>
          <div className="w-[240px] flex items-center gap-2 hover:bg-[#343541] transition-all ease-linear duration-200 py-4 mb-1 rounded-[7px] px-2">
            <span className="text-[8px] bg-[#3b82f680] p-1">PE</span>
            <h4 className="whitespace-nowrap text-ellipsis overflow-hidden">
              perpetualmeninwa@gmail.com
            </h4>
            <span className="text-lg ml-2">
              <AiOutlineEllipsis />
            </span>
          </div>
        </div>
      </nav>

      {/* This is the left side menu for Mobile */}
      <nav className={`flex items-start md:hidden `}>
        <div
          className={`flex flex-col w-[80%] sm:w-[60%] top-0 bottom-0 left-0 bg-[#202123] p-[10px] z-20 fixed md:hidden transition ${
            showNav ? "translate-x-[-100%]" : "translate-x-[0%]"
          }`}
        >
          {/* For the New Chat Button/Box */}
          <div className="p-[8px] border border-solid border-[#fff3] rounded-[5px] text-start text-[0.8rem] flex items-center hover:bg-[rgba(255,255,255,0.1)] transition-all ease-linear duration-200 cursor-pointer">
            <span className="pl-[6px] pr-[12px] text-[1.5rem]">+</span>
            New chat
          </div>

          {/* This is for the bottom part of the aside section */}
          <div className="absolute bottom-0 text-[0.85rem] border-t border-[#fff3] py-1 cursor-pointer font-medium w-[95%]">
            <div className="flex items-center hover:bg-[#343541] transition-all ease-linear duration-200 py-3 rounded-[7px] px-2 whitespace-nowrap">
              <span className="pr-4">
                <BiUser />
              </span>
              Upgrade to Plus
              <span className="ml-[2rem] bg-yellow px-2 py-1 rounded-lg text-[#282c34] font-medium text-xs">
                NEW
              </span>
            </div>
            <div className="md:w-[240px] w-full flex items-center gap-2 hover:bg-[#343541] transition-all ease-linear duration-200 py-4 mb-1 rounded-[7px] px-2">
              <span className="text-[8px] bg-[#3b82f680] p-1">PE</span>
              <h4 className="whitespace-nowrap text-ellipsis overflow-hidden ml-2">
                perpetualmeninwa@gmail.com
              </h4>
              <span className="text-lg pl-3 md:ml-2">
                <AiOutlineEllipsis />
              </span>
            </div>
          </div>
        </div>
        <button
          className={`close md:hidden ${
            showNav ? "hidden" : "fixed top-2 border-2"
          } p-2 left-[22rem] sm:left-[19rem] transition duration-300 z-10 text-xl}`}
          onClick={handleNav}
        >
          <AiOutlineClose className="text-[1.2rem]" />
        </button>
        {showNav ? (
          <RxHamburgerMenu />
        ) : (
          <div className="overlay" onClick={handleNav}></div>
        )}
      </nav>

      {/* This is for the right side menu where the response is displayed */}
      <section
        className={`flex flex-col bg-[#343541] ${
          showNav ? "absolute" : "fixed"
        } top-0 bottom-0 right-0 md:w-[80%] w-[100%] text-[#D9D9E3]`}
      >
        {/* TOP HAMBURGER MENU FOR MOBILE/TABLETS */}
        <div className="flex justify-between items-center px-4 py-[10px] border-[#838181] border-b-[0.2px] md:hidden">
          <button className="hover:font-extrabold" onClick={handleNav}>
            <RxHamburgerMenu className="text-[1.4rem] hover:text-[1.5rem]" />
          </button>
          <h3 className="text-[0.9rem]">New Chat</h3>
          <AiOutlinePlus className="text-[1.4rem] cursor-pointer" />
        </div>

        <h1 className="md:block font-bold pb-10 text-[2.175rem] text-white pt-0 md:pt-[7rem]">
          ChatGPT
        </h1>

        {/* EXAMPLES, CAPABILITIES AND LIMITATIONS */}
        <div className="flex md:flex-row flex-col items-center w-full md:gap-4 md:items-start md:w-[75%] md:mx-auto md:pb-[10rem] bg-[#343541]">
          {/* EXAMPLES */}
          <div className="flex flex-col items-center px-5 md:px-0 gap-4 md:w-[30%] w-[98%]">
            <div className="flex gap-4 md:flex-col flex-row">
              <div className="mx-auto">
                <BsSun className="text-[1.4rem]" />
              </div>
              <h3 className="font-semibold text-[1.1rem]">Examples</h3>
            </div>
            <h5 className="text-[0.85rem] bg-[#ffffff0d] hover:bg-[#202123] cursor-pointer px-4 py-3 rounded-[6px] font-medium leading-5 w-full">
              "Explain quantum computing in simple terms"
              <BsArrowRightShort className="text-[1.2rem] inline-block" />
            </h5>
            <h5 className="text-[0.85rem] bg bg-[#ffffff0d] hover:bg-[#202123] cursor-pointer px-4 py-3 rounded-[6px] font-medium leading-5 w-full">
              "Got any creative ideas for a 10 year old's birthday?"{" "}
              <BsArrowRightShort className="text-[1.2rem] inline-block" />
            </h5>
            <h5 className="text-[0.85rem] bg bg-[#ffffff0d] hover:bg-[#202123] cursor-pointer px-4 py-3 rounded-[6px] font-medium leading-5 w-full">
              "How do I make an HTTP request in Javascript?"{" "}
              <BsArrowRightShort className="text-[1.2rem] inline-block" />
            </h5>
          </div>

          {/* CAPABILITIES */}
          <div className="flex flex-col items-center pt-8 md:pt-0 px-5 md:px-0 gap-4 md:w-[30%] w-[98%]">
            <div className="flex gap-4 md:flex-col flex-row">
              <div className="mx-auto">
                <BsLightningCharge className="text-[1.4rem]" />
              </div>
              <h3 className="font-semibold text-[1.1rem]">Capabilities</h3>
            </div>
            <h5 className="text-[0.85rem] bg-[#ffffff0d] px-4 py-3 rounded-[6px] font-medium leading-5 w-full">
              "Remembers what user said earlier in the conversation"
            </h5>
            <h5 className="text-[0.85rem] bg-[#ffffff0d] px-4 py-3 rounded-[6px] font-medium leading-5 w-full">
              "Allows user to provide follow-up corrections"
            </h5>
            <h5 className="text-[0.85rem] bg-[#ffffff0d] px-4 py-3 rounded-[6px] font-medium leading-5 w-full">
              "Trained to decline inappropriate requests"
            </h5>
          </div>

          {/* LIMITATIONS SECTION */}
          <div className="flex flex-col items-center pt-8 md:pt-0 px-5 md:px-0 gap-4 md:w-[30%] w-[98%] mb-[12rem] md:mb-0">
            <div className="flex gap-4 md:flex-col flex-row">
              <div className="mx-auto">
                <BsExclamationTriangle className="text-[1.4rem]" />
              </div>
              <h3 className="font-semibold text-[1.1rem]">Limitations</h3>
            </div>
            <h5 className="text-[0.85rem] bg-[#ffffff0d] px-4 py-3 rounded-[6px] font-medium leading-5 w-full">
              "May occassionally generate incorrect information"
            </h5>
            <h5 className="text-[0.85rem] bg-[#ffffff0d] px-4 py-3 rounded-[6px] font-medium leading-5 w-full">
              "May occassionally produce harmful instructions or biased content"
            </h5>
            <h5 className="text-[0.85rem] bg-[#ffffff0d] px-4 py-3 rounded-[6px] font-medium leading-5 w-full">
              "Limited knowedge of world and events after 2021"
            </h5>
          </div>
        </div>
        <div
          className="flex flex-col items-center w-[97%] md:w-[75%] md:ml-[-4rem] lg:ml-8 fixed bottom-0 left-2 md:left-[15rem] bg-[#343541] border-t border-[#7f8196] pt-2 md:border-none md:pt-0"
          title="footer"
        >
          <div className="flex justify-between px-5 py-4 mb-[0.5rem] md:w-[80%] w-full bg-[#40414f] text-sm">
            <input
              type="text"
              placeholder="Send a message."
              className="outline-none bg-[rgb(64,65,79)] w-full"
            />
            <BsSend className="text-[#7f8196]" />
          </div>
          <h6 className="text-[0.7rem] pt-2 pb-6">
            Free Research Preview. ChatGPT may produce inaccurate information
            about people, places, or facts. <span> </span>
            <a
              href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
              className="underline"
            >
              ChatGPT May 3 Version
            </a>
          </h6>
        </div>
      </section>

      <button className="text-white fixed border-[0.1px] border-[#7f8196] rounded-full p-1 right-5 bottom-[10rem] bg-[#50515c]">
        <Link
          activeClass="active"
          to="footer"
          spy={true}
          smooth={true}
          offset={-70}
          duration={300}
          onClick={scroll.scrollToBottom}
        >
          <AiOutlineArrowDown />
        </Link>
      </button>
      <ModalUpgrade open={showModal} onClose={startModal} />
    </div>
  );
}

export default App;
