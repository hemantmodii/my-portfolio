import banner from "./assets/linked-banner.png";

const Creatives = () => {
  return (
    <div className="h-[100vh]">
      <div>
        <h1 className="text-center text-[40px]  tracking-normal uppercase w-full bg-purple-200 mt-10">
          Creatives
        </h1>
        <div className="absolute w-full overflow-hidden">
          <img
            className="relative top-[50px] z-[-2] w-full"
            src={banner}
            alt=""
          />
          <div className="relative h-[470px] w-auto bg-violet-300 mix-blend-multiply z-[-1] top-[-419px]"></div>
          <div className="h-[100px] w-[100px] border-violet-300 border-2 relative top-[-610px] rotate-45 left-[-20px] transition-all duration-400 rounded hover:rotate-0 hover:border-black">
          </div>
          <div className="h-[100px] w-[300px] border-violet-300 border-2 relative top-[-900px] rotate-45 left-[360px] transition-all duration-400 rounded hover:rotate-0 hover:border-black">
          </div>
          <div className="h-[100px] w-[300px] border-violet-300 border-2 relative top-[-800px] rotate-[-45deg] left-[80%] transition-all duration-400 rounded hover:rotate-0 hover:border-black">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creatives;
