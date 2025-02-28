import React from "react";

function Header() {
  return (
    <>
      <div className="border-b-2 h-auto md:h-28 py-4 px-4 md:py-6 md:px-4 lg:px-6 lg:py-20 flex flex-row items-center justify-center gap-3 md:gap-4 shadow-[0px 2px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)]">
        <div>
          <img
            className="w-[43px] h-[52px] md:w-[50px] md:h-[60px] lg:w-[55px] lg:h-[64px]"
            src="chef-icon.svg"
            alt=""
          />
        </div>
        <div className="text-[32px] md:text-4xl font-normal leading-[1.875] tracking-tighter">
          AI-Chef
        </div>
      </div>
    </>
  );
}

export default Header;
