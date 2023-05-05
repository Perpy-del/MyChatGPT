import "./normalize.css";
import { BiUser } from "react-icons/bi";
import { AiOutlineEllipsis } from "react-icons/ai";

function App() {
  return (
    // This is the main UI for the page
    <div className="bg-[#282c34] absolute top-0 right-0 left-0 bottom-0 text-white flex text-center">
      {/* This is for the left side menu  */}
      <aside className="w-[260px] absolute top-0 bottom-0 left-0 bg-[#202123] p-[10px]">
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
      <section className="flex-1 bg-[#343541]"></section>
    </div>
  );
}

export default App;
