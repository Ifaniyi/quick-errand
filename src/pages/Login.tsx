import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    navigate(from);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="bg-white p-10 rounded-2xl shadow w-full max-w-sm text-center">
        <h1 className="text-2xl font-semibold mb-6">Login Required</h1>

        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-xl bg-teal-600 text-white font-medium hover:bg-teal-700 transition"
        >
          Login
        </button>
      </div>
    </section>
  );
}
