import React from "react";
import "./index.css"
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
import Contact from "./routes/Contact";
import { Routes, Route} from "react-router-dom";
import Dashboard from "./component/Dashboard";

function App() {
  return (
   <>
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    

   </Routes>
   </>
  );
}

export default App;
