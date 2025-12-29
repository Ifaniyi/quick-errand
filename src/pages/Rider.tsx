import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star } from "lucide-react";

export default function Rider() {
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
          Back to shop
        </button>

        {/* Rider Card */}
        <div className="bg-white border rounded-2xl p-10 shadow-sm text-center">
          
          {/* Avatar */}
          <div className="w-24 h-24 mx-auto rounded-full bg-slate-200 mb-6" />

          <h1 className="text-2xl font-semibold text-slate-800">
            Rider #{id}
          </h1>

          <p className="text-slate-500 mt-2">
            Available • Fast delivery within estate
          </p>

          {/* Rating */}
          <div className="flex justify-center items-center gap-1 mt-4 text-yellow-500">
            <Star className="w-5 h-5 fill-yellow-500" />
            <span className="text-slate-700 font-medium">4.8</span>
          </div>

          {/* CTA */}
          <button
            onClick={() => navigate("/book")}
            className="mt-10 w-full bg-teal-600 text-white py-3 rounded-xl
            hover:bg-teal-700 transition"
          >
            Continue to Booking
          </button>
        </div>
      </div>
    </section>
  );
}
