import myImage from "./assets/myImagecrop.jpg";
import resume from './assets/resume.pdf';

const About = () => {
  return (
      <div className=" lg:mb-28 mb-[60px] lg:mt-36 mt-20 lg:ml-[10%] ml-[7%] lg:pr-0 pr-[7%] flex justify-start items-center gap-16 md:pr-[10%]">
        <div className="lg:w-1/2 sm:w-full">
          <div className="flex justify-between mb-8">
            <h1 className="text-4xl tracking-tight">About Me</h1>
            
              <a href={resume}><button className="border-2 border-black rounded-full py-3 px-4 transition-colors duration-400 ease-in-out hover:bg-violet-600 hover:border-violet-600 hover:text-white">📄Resume
            </button></a>
          </div>
          <div className="text-lg flex flex-col gap-8 mb-20 tracking-wider lg:mt-0">
            <p>
            As a Full Stack Web Developer, I bring technical expertise and creative vision to my projects. With a background in <b>Electronics and Communication Engineering</b> from the <b>National Institute of Technology Raipur</b>, I excel in front-end development using <b>React</b> and have a solid grasp of back-end technologies. My aim is to create user-friendly web applications.
            </p>
            <p>
            I am committed to continuous learning and improvement. Proficient in <b>HTML, CSS, JavaScript, MySQL, and C++</b>, I handle both client-side and server-side development. My part-time graphic design experience enhances my ability to craft visually appealing user interfaces. I strive to deliver high-quality solutions.
            </p>
            <p className="lg:mb-0 mb-[500px] lg:pb-0 pb-8 lg:border-0 border-b-2">
            Collaboration is key to my work ethic. I thrive in team-oriented environments and adapt quickly to new challenges. My background in <b>deep learning, optical communication, and embedded systems</b> allows me to approach web development with a multidisciplinary perspective, ensuring innovative solutions.
            </p>
          </div>
          <div>
            <h2 className="text-2xl tracking-wider pb-4 font-semibold lg:border-0 border-t-2 lg:pt-0 pt-8">
              When I am not working...
            </h2>
            <h3 className="text-3xl tracking-widest pb-14">
              🎸 📚 🎮 🎹 🏸 📷
            </h3>
            <p className="text-lg tracking-wider leading-8 font-normal">
            When I am not working, I indulge in various hobbies. I enjoy reading, especially Harry Potter and books on psychology. Playing chess sharpens my mind, while the guitar and harmonium provide a musical outlet. I am also a big fan of Marvel movies, which fuel my imagination and inspire creativity.
            </p>
          </div>
        </div>
        <div className="absolute lg:ml-[55%] ml-[17%] lg:mt-[-280px] mt-[445px] bg-violet-200 lg:h-[58%] lg:w-[17%] rounded-lg transition-shadow duration-300 hover:shadow-violet-600 hover:shadow-md sm:mt-[1400px] sm:w-[30%] sm:ml-[27%]">
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
