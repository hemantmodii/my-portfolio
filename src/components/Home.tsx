import Landing from "@/Landing";
import Separator from "@/Separator";
import WorkPage from "@/WorkPage";
import LineArt from "./LineArt";

const Home = () => {
  return (
    <div className="flex-1" >
      <div className="z-20 bg-none absolute top-[13.3rem] right-36 hidden lg:block scale-125">
      <LineArt/>
      </div>
      <Landing/>
      <Separator/>
      <WorkPage/>
    </div>
  )
}

export default Home