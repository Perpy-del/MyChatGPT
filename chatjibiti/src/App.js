import "./normalize.css";
import { BiUser } from "react-icons/bi";
import { AiOutlineEllipsis } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { BsSend } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsLightningCharge } from "react-icons/bs";
import { BsExclamationTriangle } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";

function App() {
  return (
    // This is the main UI for the page
    <div className="text-white flex items-center text-center">
      {/* This is for the left side menu  */}
      <aside className="md:flex md:flex-col md:w-[20%]  md:top-0 md:bottom-0 md:left-0 md:bg-[#202123] md:p-[10px] hidden md:fixed">
        {/* For the New Chat Button/Box */}
        <div className="p-[8px] border border-solid border-[#fff3] rounded-[5px] text-start text-[0.8rem] flex items-center hover:bg-[rgba(255,255,255,0.1)] transition-all ease-linear duration-200 cursor-pointer">
          <span className="pl-[6px] pr-[12px] text-[1.5rem]">+</span>
          New chat
        </div>

        {/* This is for the bottom part of the aside section */}
        <div className="absolute bottom-0 text-[0.85rem] border-t border-[#fff3] py-1 cursor-pointer font-medium">
          <div className="flex items-center hover:bg-[#343541] transition-all ease-linear duration-200 py-3 rounded-[7px] px-2">
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
      </aside>

      {/* This is for the right side menu where the response is displayed */}
      <section className="flex flex-col bg-[#343541] absolute top-0 bottom-0 right-0 md:w-[80%] w-[100%] text-[#D9D9E3]">
        {/* TOP HAMBURGER MENU FOR MOBILE/TABLETS */}
        <div className="flex justify-between items-center px-4 py-[10px] border-[#838181] border-b-[0.2px] md:hidden">
          <RxHamburgerMenu className="text-[1.4rem] cursor-pointer" />
          <h3 className="text-[0.9rem]">New Chat</h3>
          <AiOutlinePlus className="text-[1.4rem] cursor-pointer" />
        </div>

        {/* CHATGPT TEXT HIDDEN FOR MOBILE/TAB DEVICES */}
        <h1 className="hidden md:block md:font-bold pb-10 text-[2.175rem] text-white pt-[7rem]">
          ChatGPT
        </h1>

        {/* EXAMPLES, CAPABILITIES AND LIMITATIONS */}
        <div className="flex gap-4 items-start w-[75%] mx-auto pb-[10rem] bg-[#343541]">
          {/* EXAMPLES */}
          <div className="flex flex-col items-center gap-4 w-[30%]">
            <BsSun className="text-[1.4rem]" />
            <h3 className="font-semibold text-[1.1rem]">Examples</h3>
            <h5 className="text-[0.85rem] bg-[#ffffff0d] hover:bg-[#202123] cursor-pointer px-4 py-3 rounded-[6px] font-medium leading-5">
              "Explain quantum computing in simple terms"
              <BsArrowRightShort className="text-[1.2rem] inline-block" />
            </h5>
            <h5 className="text-[0.85rem] bg bg-[#ffffff0d] hover:bg-[#202123] cursor-pointer px-4 py-3 rounded-[6px] font-medium leading-5">
              "Got any creative ideas for a 10 year old's birthday?"{" "}
              <BsArrowRightShort className="text-[1.2rem] inline-block" />
            </h5>
            <h5 className="text-[0.85rem] bg bg-[#ffffff0d] hover:bg-[#202123] cursor-pointer px-4 py-3 rounded-[6px] font-medium leading-5">
              "How do I make an HTTP request in Javascript?"{" "}
              <BsArrowRightShort className="text-[1.2rem] inline-block" />
            </h5>
          </div>

          {/* CAPABILITIES */}
          <div className="flex flex-col items-center gap-4 w-[30%]">
            <BsLightningCharge className="text-[1.4rem]" />
            <h3 className="font-semibold text-[1.1rem]">Capabilities</h3>
            <h5 className="text-[0.85rem] bg-[#ffffff0d] px-4 py-3 rounded-[6px] font-medium leading-5">
              "Remembers what user said earlier in the conversation"
            </h5>
            <h5 className="text-[0.85rem] bg-[#ffffff0d] px-4 py-3 rounded-[6px] font-medium leading-5">
              "Allows user to provide follow-up corrections"
            </h5>
            <h5 className="text-[0.85rem] bg-[#ffffff0d] px-4 py-3 rounded-[6px] font-medium leading-5">
              "Trained to decline inappropriate requests"
            </h5>
          </div>

          {/* LIMITATIONS SECTION */}
          <div className="flex flex-col items-center gap-4 w-[30%]">
            <BsExclamationTriangle className="text-[1.4rem]" />
            <h3 className="font-semibold text-[1.1rem]">Limitations</h3>
            <h5 className="text-[0.85rem] bg-[#ffffff0d] px-4 py-3 rounded-[6px] font-medium leading-5">
              "May occassionally generate incorrect information"
            </h5>
            <h5 className="text-[0.85rem] bg-[#ffffff0d] px-4 py-3 rounded-[6px] font-medium leading-5">
              "May occassionally produce harmful instructions or biased content"
            </h5>
            <h5 className="text-[0.85rem] bg-[#ffffff0d] px-4 py-3 rounded-[6px] font-medium leading-5">
              "Limited knowedge of world and events after 2021"
            </h5>
          </div>
        </div>
        <div className="flex flex-col items-center w-[75%] ml-5 fixed bottom-0">
          <div className="flex justify-between px-5 py-4 mb-[0.5rem] w-[80%] bg-[#40414f] text-sm">
            <input
              type="text"
              placeholder="Send a message."
              className="outline-none bg-[#40414f]"
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
    </div>
  );
}

export default App;
