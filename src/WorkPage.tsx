// import WorkCard from "@/WorkCard"
import img1 from "./assets/sand.png";
import img2 from "./assets/taskTracker.png";
import img3 from "./assets/wordle.png";
import img4 from "./assets/novel.png";
import img5 from "./assets/Tictactoe.png";
import img6 from "./assets/zyntime.png";
// import { Params } from "react-router-dom";

const works = [
  {
    heading: "My Web Novel",
    text: "My creative writing space, where I publish new chapters and excerpts every week.",
    tags: ["NextJS", "NeonDB", "TailwindCSS"],
    image: img4,
    pagelink: "https://novel.hemantmodi.com",
  },
  {
    heading: "ZynTime App",
    text: "The best app to track your daily and monthly goals and track your time effectively.",
    tags: ["ReactJS", "TailwindCSS", "ShadCN UI"],
    image: img6,
    pagelink: "https://novel.hemantmodi.com",
  },
  {
    heading: "Falling Sand",
    text: "A physics simulator game that makes beautiful sand ridges on cursor movement.",
    tags: ["P5.js", "HTML", "CSS"],
    image: img1,
    pagelink:
      "https://sand.hemantmodi.com",
  },
  {
    heading: "Task Tracker",
    text: "I have made this project to track the time it takes to complete an assigned task.",
    tags: ["ReactJS", "HTML", "CSS"],
    image: img2,
    pagelink: "https://task-tracker-kappa-gilt.vercel.app/",
  },
  {
    heading: "Wordle Game",
    text: "The New York Times famous game of guessing the Word of the Day ( or WOTD ).",
    tags: ["JavaScript", "HTML", "CSS"],
    image: img3,
    pagelink: "https://hemantmodii.github.io/wordle/",
  },
  {
    heading: "Tic Tac Toe",
    text: "Themed Tic Tac Toe implemented with ReactJS and TailwindCSS for classy UI.",
    tags: ["ReactJS", "TailwindCSS"],
    image: img5,
    pagelink: "https://tictactoe.hemantmodi.com",
  },
];

const WorkPage = () => {
  // const param = useParams();

  return (
    <div
      id="main-work"
      className="lg:mx-[15%] mx-[5%] mb-16 flex flex-col justify-center items-center w-2/3"
    >
      {works.map((item, i) => (
        <div
          className="py-16 border-b-2 px-8 flex justify-center items-center lg:pr-[30%]"
          key={i}
        >
          <div>
            <h1 className="text-4xl mb-10 font-semibold">
              <a className="group" href={item.pagelink}>
                {item.heading}
                <div className="h-1.5 w-0 bg-black lg:group-hover:w-[40%] group-hover:w-full transition-all duration-500"></div>
              </a>
            </h1>
            <p className="lg:block hidden w-4/5 text-md mb-8 leading-5 text-gray-700 dark:text-gray-400">
              {item.text}
            </p>
            <div className="lg:block gap-2 grid auto-rows-auto lg:ml-0 ml-[-7%] mr-20">
              {item.tags.map((el, j) => (
                <button
                  className="bg-white text-black border-black border-2 px-2.5 py-1 mx-2 rounded-full hover:bg-violet-300 transition-all duration-300 ease-out hover:border-violet-300 hover:text-white "
                  key={`${j}${i}`}
                >
                  {el}
                </button>
              ))}
            </div>
          </div>
          <div className="absolute lg:h-[30%] h-[16%] lg:w-1/4 w-[40%] lg:ml-[50%] ml-[65%] lg:mt-0 mt-24 bg-violet-200 overflow-hidden rounded-xl shadow-md">
            <div className="relative lg:top-16 top-14 left-[16%] lg:hover:translate-x-[-10px] hover:translate-x-[-10px] hover:translate-y-[-6px] transition-all duration-300 ease-in-out shadow-md shadow-gray-900 lg:hover:translate-y-[-13px] hover:shadow-lg hover:shadow-gray-950 rounded-xl">
              <a href={item.pagelink}>
                <img className="rounded-xl" src={item.image} alt="" loading="lazy"/>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkPage;
