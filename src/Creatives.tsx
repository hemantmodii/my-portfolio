import banner from "./assets/linked-banner.png";

const Creatives = () => {
  return (
    <div className="h-[100vh] mb-[600px]">
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
          <div className="lg:h-[100px] h-[40px] lg:w-[100px] w-[40px] border-violet-300 border-2 relative lg:top-[-610px] top-[-485px] rotate-45 lg:left-[-20px] left-[-10px] transition-all duration-400 rounded hover:rotate-0 hover:border-black">
          </div>
          <div className="lg:h-[100px] h-[33px] lg:w-[300px] w-[100px] border-violet-300 border-2 relative lg:top-[-900px] top-[-36rem] rotate-12 lg:left-[360px] left-[6rem] transition-all duration-400 rounded hover:rotate-0 hover:border-black">
          </div>
          <div className="lg:h-[100px] h-[33px] lg:w-[300px] w-[100px] border-violet-300 border-2 relative lg:top-[-800px] top-[-550px] rotate-[-25deg] left-[82%] transition-all duration-400 rounded hover:rotate-0 hover:border-black">
          </div>
        </div>
      </div>
      <div className="mt-[600px] text-center text-2xl"><p>To be added...</p></div>
    </div>
  );
};

export default Creatives;
