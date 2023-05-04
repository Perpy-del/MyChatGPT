import "./normalize.css";

function App() {
  return (
    // This is the main UI for the page
    <div className="bg-[#282c34] absolute top-0 right-0 left-0 bottom-0 text-white flex text-center">
      {/* This is for the left side menu  */}
      <aside className="w-[260px] absolute top-0 bottom-0 left-0 bg-[#202123] p-[10px]">
        <div className="p-[9px] border border-solid border-white rounded-[5px] text-start text-[0.8rem] flex items-center">
          <span className="pl-[6px] pr-[12px] text-[1.5rem]">+</span>
          New chat
        </div>
      </aside>
      {/* This is for the right side menu where the response is displayed */}
      <section className="flex-1 bg-[#343541]"></section>
    </div>
  );
}

export default App;
