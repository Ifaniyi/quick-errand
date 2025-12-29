import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Shops from "./pages/Shops";
import ShopDetails from "./pages/ShopDetails";
import Rider from "./pages/Rider";

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
        <Route path="/shops/:id" element={<ShopDetails />} />

        {/* Riders */}
        <Route path="/riders/:id" element={<Rider />} />

        {/* Auth */}
        <Route path="/login" element={<div>Login Page</div>} />

        {/* Protected (later) */}
        <Route path="/book" element={<div>Book Page</div>} />
        <Route path="/chat" element={<div>Chat Page</div>} />
        <Route path="/track" element={<div>Track Page</div>} />
      </Routes>
    </>
  );
}

export default App;
