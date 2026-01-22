import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function RequestDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-slate-50 py-24">
      <div className="max-w-3xl mx-auto px-6">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-800 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <h1 className="text-3xl font-semibold text-slate-800 mb-2">
          What do you want from this shop?
        </h1>

        <p className="text-slate-500 mb-8">
          Describe the items you need. Our rider will handle the rest.
        </p>

        <textarea
          placeholder="Example: 2 loaves of bread, 1 milk, recharge card ₦2000..."
          className="w-full min-h-[140px] border rounded-xl p-4
          focus:outline-none focus:ring-2 focus:ring-teal-500"
        />

        <button
          onClick={() => navigate(`/shops/${id}/riders`)}
          className="mt-6 w-full bg-teal-600 text-white py-3 rounded-xl
          hover:bg-teal-700 transition"
        >
          Continue
        </button>
      </div>
    </section>
  );
}
