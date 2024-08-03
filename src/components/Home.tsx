import Landing from "@/Landing";
import Separator from "@/Separator";
import WorkPage from "@/WorkPage";
import LineArt from "./LineArt";
import InfiSlider from "./InfiSlider";
import expressImg from "../assets/express.png"
import mongodbImg from "../assets/mongodb.png"
import mysqlImg from "../assets/mysql.png"
import nodejsImg from "../assets/nodejs.png"
import reactImg from "../assets/react.png"
import tailwindcssImg from "../assets/tailwind.png"

const images = [
    mongodbImg,
    expressImg,
    reactImg,
    nodejsImg,
    tailwindcssImg,
    mysqlImg
]

const Home = () => {
  return (
    <div className="flex-1" >
      <div className="z-20 bg-none absolute top-[13.3rem] right-36 hidden lg:block scale-125">
      <LineArt/>
      </div>
      <Landing/>
      <Separator/>
      <WorkPage/>
      <Separator/>
      <InfiSlider images={images} width="200px" height="100px"/>
    </div>
  )
}

export default Home