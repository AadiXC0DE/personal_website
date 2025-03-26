import "./App.css";
import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Experience = lazy(() => import("./pages/Experience"));
const Contact = lazy(() => import("./pages/Contact"));
const Error = lazy(() => import("./pages/Error"));

const LoadingFallback = () => (
  <div className="tw-flex tw-items-center tw-justify-center tw-h-screen tw-bg-black">
    <div className="tw-text-[#4fbdba] tw-text-xl">Loading...</div>
  </div>
);

function App() {
  return (
    <div className="App">
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
