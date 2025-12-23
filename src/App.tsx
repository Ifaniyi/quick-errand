import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />

        {/* Services */}
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/services/:type" element={<div>Service Details</div>} />

        {/* Shops */}
        <Route path="/shops" element={<div>Shops In Estate</div>} />
        <Route path="/shops/:id" element={<div>Shop Details</div>} />

        {/* Riders */}
        <Route path="/riders/:id" element={<div>Rider Profile</div>} />

        {/* Auth */}
        <Route path="/login" element={<div>Login Page</div>} />

        {/* Protected later */}
        <Route path="/book" element={<div>Book Page</div>} />
        <Route path="/chat" element={<div>Chat Page</div>} />
        <Route path="/track" element={<div>Track Page</div>} />
      </Routes>
    </>
  );
}

export default App;
