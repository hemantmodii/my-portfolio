// import WorkCard from "@/WorkCard"
import img1 from "./assets/taskTracker.png";
// import { Params } from "react-router-dom";

const works = [
  {
    heading: "Task Tracker",
    text: "I have made this project to track the time it takes to complete an assigned task.",
    tags: ["javascript", "html", "css"],
    image: img1,
    pagelink: "https://task-tracker-kappa-gilt.vercel.app/",
  },
  {
    heading: "Task Tracker",
    text: "I have made this project to track the time it takes to complete an assigned task.",
    tags: ["javascript", "html", "css"],
    image: img1,
  },
  {
    heading: "Task Tracker",
    text: "I have made this project to track the time it takes to complete an assigned task.",
    tags: ["javascript", "html", "css"],
    image: img1,
  },
];

const WorkPage = () => {

  // const param = useParams();




  return (
    <div id="main-work" className="mx-[15%] mb-16 flex flex-col justify-center items-center w-2/3">
      {works.map((item, i) => (
        <div className="py-16 border-b-2 px-8 flex justify-center items-center pr-[30%]" key={i}>
          <div>
          <h1 className="text-4xl mb-10 font-semibold"><a className="group" href={item.pagelink}>{item.heading}
          <div className="h-1.5 w-0 bg-black group-hover:w-[40%] transition-all duration-500"></div></a></h1>
          <p className="w-4/5 text-md mb-8 leading-5 text-gray-700 dark:text-gray-400">{item.text}</p>
          <div>
            {item.tags.map((el, j) => (
              <button
                className="bg-white text-black border-black border-2 px-2.5 py-1 mx-2 rounded-full hover:bg-violet-500 hover:border-violet-500 hover:text-white"
                key={`${j}${i}`}
              >
                {el}
              </button>
            ))}
          </div>
          </div>
          <div className="absolute h-[30%] w-1/4 ml-[50%] bg-violet-950 overflow-hidden rounded-xl shadow-md">
          <div className="relative top-16 left-[20%] hover:translate-x-[-10px] transition-all duration-300 ease-in-out shadow-md shadow-gray-100 dark:shadow-gray-800 hover:translate-y-[-13px] hover:shadow-lg hover:shadow-gray-100 rounded-xl"><img className="rounded-xl" src={item.image} alt="" /></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkPage;
