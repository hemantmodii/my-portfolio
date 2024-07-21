import WorkPage from "./WorkPage";
import Creatives from "./Creatives";
import './App.css';
import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import About from "./About";

function App() {

  return (
    <Routes>
    <Route element={<RootLayout/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/work" element={<WorkPage/>} />
      <Route path="/profile/creatives" element={<Creatives/>} />
      <Route path="/profile/about" element={<About/>} />
    </Route>
    </Routes>
  );
}

export default App;
