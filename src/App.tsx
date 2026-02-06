import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

// Pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
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
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Main App */}
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/services/:service" element={<Service />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/riders/:id" element={<Rider />} />

        <Route path="/where-to/:service" element={<WhereTo />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/shops/:id/request" element={<RequestDetails />} />

        <Route path="/book" element={<Book />} />
      </Routes>
    </>
  );
}

export default App;
