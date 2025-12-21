import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </>
  );
}

export default App;
