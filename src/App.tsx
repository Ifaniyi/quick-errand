import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import Service from "./pages/Service";
import Shops from "./pages/Shops";
import Rider from "./pages/Rider";
import Book from "./pages/Book";
import RequestDetails from "./pages/RequestDetails";
import Login from "./pages/Login";
import WhereTo from "./pages/WhereTo";
import Summary from "./pages/Summary";




function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Services */}
        <Route path="/services/:service" element={<Service />} />

        {/* Shops */}
        <Route path="/shops" element={<Shops />} />

        {/* Riders */}
        <Route path="/riders/:id" element={<Rider />} />

        {/* Summary */}
        <Route path="/summary" element={<Summary />} />


        {/* Where to */}
        <Route path="/where-to/:service" element={<WhereTo />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/shops/:id/request" element={<RequestDetails />} />


        {/* Protected (later) */}
        <Route path="/book" element={<Book />} />
        <Route path="/chat" element={<div>Chat Page</div>} />
        <Route path="/track" element={<div>Track Page</div>} />
      </Routes>
    </>
  );
}

export default App;
