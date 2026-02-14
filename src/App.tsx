import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import Instructions from "./pages/Instructions";
import Riders from "./pages/Riders";


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/instructions/:service" element={<Instructions />} />
        <Route path="/riders" element={<Riders />} />


       
      </Routes>
    </>
  );
}

export default App;
