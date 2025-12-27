import { useParams, useNavigate } from "react-router-dom";
import { Store, ArrowLeft } from "lucide-react";

export default function ShopDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-slate-50 py-24">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-800 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to shops
        </button>

        {/* Shop Card */}
        <div className="bg-white border rounded-2xl p-10 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-teal-100 flex items-center justify-center mb-6">
            <Store className="w-8 h-8 text-teal-600" />
          </div>

          <h1 className="text-3xl font-semibold text-slate-800">
            Shop #{id}
          </h1>

          <p className="text-slate-500 mt-3 max-w-md">
            This shop serves residents within your estate. Select a rider to
            continue with your order.
          </p>

          {/* CTA */}
          <button
            onClick={() => navigate("/riders/1")}
            className="mt-10 inline-flex items-center justify-center
            bg-teal-600 text-white px-8 py-3 rounded-xl
            hover:bg-teal-700 transition"
          >
            Select Rider
          </button>
        </div>
      </div>
    </section>
  );
}
