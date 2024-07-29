import banner from "../assets/linked-banner.png";
import occu_color from "../assets/occu_color.png";
import occu_red from "../assets/occu_red.png";
import polyhm from "../assets/polyhm.png";
import banner2 from "../assets/twitter_samurai.png";
import devil from "../assets/devil.png";
import { useState } from "react";
import lived from "../assets/lived.png";
import time from "../assets/time.png";

const CreateGrid = () => {

    const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex  items-center justify-center min-h-screen p-10 lg:mt-36 mt-0">
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-8 w-full max-w-full">
        <img
          src={occu_color}
          className=" col-span-3 row-span-2 rounded-2xl shadow-md flex items-center justify-center transition-all duration-300  hover:scale-[103%] rotate-3 hover:rotate-0"
        />
        <img
          src={banner}
          alt="banner"
          className="rounded-xl shadow-md row-span-1 flex items-center justify-center col-span-6 transition-all duration-300 hover:scale-[102%] lg:-mt-20"
        />
        <div className={`bg-gradient-to-br from-[#CEC6B0] to-white text-black p-4 rounded-xl shadow-md flex items-center justify-center ${isHovered ? "text-2xl tracking-normal" : "text-3xl tracking-widest"}  col-span-2 row-span-1 transition-transform duration-300 ease-out rotate-6 hover:rotate-0`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
          {isHovered ? "Engineer." : "er."}
        </div>
        <img
          src={polyhm}
          className="bg-[#ded7c3] rounded-xl text-white p-4  shadow-md flex items-center justify-center row-span-2 col-span-3 transition-all duration-300 hover:scale-[102%] -rotate-2 hover:rotate-0"
        />
        <img
          src={banner2}
          className="shadow-md  row-span-2 col-span-6 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-[102%] lg:mt-10"
        />
        <img src={devil} className="rounded-xl shadow-md col-span-2 row-span-2 flex items-center justify-center transition-all duration-300 hover:scale-105"/>
        <img
          src={occu_red}
          className=" rounded-xl shadow-md col-span-2 flex items-center justify-center transition-all duration-300 hover:scale-105 -rotate-2 lg:-mt-14"
        />
        <img
          src={time}
          className=" rounded-xl shadow-md col-span-3 flex items-center justify-center transition-all duration-300 hover:scale-105 rotate-6 hover:rotate-0 lg:-mt-4"
        />
        <img src={lived} className="rounded-xl shadow-md col-span-3 row-span-2 flex items-center justify-center transition-all duration-300 hover:scale-105 lg:-mt-28"/>
        
        <div className={`bg-gradient-to-br from-[#ff0000] to-black text-white rounded-xl shadow-md flex items-center justify-center ${isHovered ? "text-2xl tracking-normal" : "text-6xl tracking-widest"}  col-span-2 row-span-1 hover:scale-105 transition-transform duration-300 rotate-1 hover:rotate-0 lg:-mt-20`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
          {isHovered ? "(End)ineer." : `:D`}
        </div>
        
      </div>
    </div>
  );
};

export default CreateGrid;
