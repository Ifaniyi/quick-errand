import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import Service from "./pages/Service";
import Shops from "./pages/Shops";
import Rider from "./pages/Rider";
import WhereTo from "./pages/WhereTo";
import Summary from "./pages/Summary";
import Book from "./pages/Book";
import Login from "./pages/Login";
import RequestDetails from "./pages/RequestDetails";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services/:service" element={<Service />} />

        <Route path="/where-to/:service" element={<WhereTo />} />

        <Route path="/riders/:id" element={<Rider />} />

        <Route path="/summary" element={<Summary />} />

        <Route path="/book" element={<Book />} />

        <Route path="/login" element={<Login />} />

        <Route path="/shops/:id/request" element={<RequestDetails />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
