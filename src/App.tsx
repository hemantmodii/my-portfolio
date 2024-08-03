import WorkPage from "./WorkPage";
import Creatives from "./Creatives";
import './App.css';
import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import About from "./About";
import Contact from "./Contact";

function App() {

  return (
    <Routes>
    <Route element={<RootLayout/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/work" element={<WorkPage/>} />
      <Route path="/creatives" element={<Creatives/>} />
      <Route path="/contact" element={<Contact/>} />
    </Route>
    </Routes>
  );
}

export default App;
