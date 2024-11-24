import { Suspense, lazy } from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Loading from "./components/Loading";

// Lazy-loaded components
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./About"));
const WorkPage = lazy(() => import("./WorkPage"));
const Creatives = lazy(() => import("./Creatives"));
const Contact = lazy(() => import("./Contact"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/creatives" element={<Creatives />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
