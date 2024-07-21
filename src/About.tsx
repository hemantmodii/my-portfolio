import myImage from "./assets/myImagecrop.jpg";
import resume from './assets/resume.pdf';

const About = () => {
  return (
      <div className=" lg:mb-28 sm:mb-[480px] mt-36 ml-[10%] lg:pr-0 sm:pr-[10%] flex justify-start items-center gap-16 ">
        <div className="lg:w-1/2 sm:w-full">
          <div className="flex justify-between mb-8">
            <h1 className="text-4xl tracking-tight">About Me</h1>
            
              <a href={resume}><button className="border-2 border-black rounded-full py-3 px-4 transition-colors duration-400 ease-in-out hover:bg-violet-600 hover:border-violet-600 hover:text-white cursor-none">📄Resume
            </button></a>
          </div>
          <div className="text-lg flex flex-col gap-8 mb-20 tracking-wider">
            <p>
              I am a product designer with a passion for solving problems and
              creating elegant experiences. Working in the business environment,
              I am keen to understand users' needs and contribute to the success
              of the business.
            </p>
            <p>
              My current focus is on fintech product design, where I aim to
              distill complex financial information into simpler, more
              digestible forms in order to empower individuals effectively grow
              their wealth.
            </p>
            <p>
              Guided by the principles of thorough research, iterative design,
              and open dialogue, my approach is holistically focused on
              enhancing every facet of user experience. With these cornerstones,
              I aim to make the user experience from good to great, bridging the
              gap between functionality and user delight.
            </p>
          </div>
          <div>
            <h2 className="text-2xl tracking-wider pb-4">
              When I am not working...
            </h2>
            <h3 className="text-3xl tracking-widest pb-14">
              🎸 📚 🎮 🎹 🏸 📷
            </h3>
            <p className="text-lg tracking-wider leading-8 font-normal">
              I immerse myself in a variety of activities that feed my spirit. I
              cherish my weekend traditions that begin with solitary piano
              sessions, followed by a search of NYC's best brunch locales. The
              day culminates in a high-energy dance group meet where we lose
              ourselves to the rhythm. My affection for both music and dance is
              a testament to my love for rhythmic expression and art.
            </p>
          </div>
        </div>
        <div className="absolute lg:ml-[55%] lg:mt-[-280px] bg-violet-200 lg:h-[58%] lg:w-[17%] rounded-lg transition-shadow duration-300 hover:shadow-violet-600 hover:shadow-md sm:mt-[1400px] sm:w-[30%] sm:ml-[27%]">
          <div className="relative top-[-20px] left-[-19px] transition-all duration-600 ease-in hover:translate-x-[9px] hover:translate-y-[10px]">
            <img
              className="grayscale shadow-md hover:rounded-md"
              src={myImage}
              alt="My Image"
            />
          </div>
        </div>
      </div>
  );
};

export default About;
