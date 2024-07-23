import wavingHand from "./assets/waving-hand.svg";

const Landing = () => {
  return (
    <div className="lg:px-[17%] px-10 mt-4 pb-16">
      <div className="flex lg:items-center font-bold tracking-tighter gap-4 pt-[10vh] pl- lg:pb-0 pb-8">
        <img
          className="h-16 transition-all duration-600 hover:rotate-12 hover:translate-y-[-3px] hover:translate-x-3 ml-[-5px]"
          src={wavingHand}
          alt="wave"
        />
        <h1 className="lg:text-[56px] text-[40px]">Hi, I'm Hemant Modi.</h1>
      </div>
      <div className="lg:pr-[33%] pr-0 py-4 lg:leading-7 leading-8 text-xl flex flex-col gap-8 mb-10">
        <p>
          A Full Stack Web Developer with a passion for crafting delightful
          experiences across screens. With a keen eye for clean websites, I am
          dedicated to creating elegant and visually appealing user experiences
          that help elevate complex workflows.
        </p>
        <p>
          Currently, I am helping a startup pop-out on the internet with the
          help of intuitive website designs at{" "}
          <strong className="underline text-violet-700">
            Paritranaya Globals
          </strong>
          .
        </p>
      </div>
      <a href="#main-work">
        <button className="border-2 border-black rounded-full py-3 px-4 dark:border-gray-100 transition-colors duration-400 ease-in-out hover:bg-violet-600 hover:border-violet-600 dark:hover:border-violet-600 hover:text-white">
          View My Work 👇
        </button>
      </a>
    </div>
  );
};

export default Landing;
