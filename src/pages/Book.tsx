import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default function Book() {
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

        {/* Booking Card */}
        <div className="bg-white border rounded-2xl p-10 shadow-sm">
          
          <h1 className="text-3xl font-semibold text-slate-800 mb-2">
            Confirm Your Booking
          </h1>

          <p className="text-slate-500 mb-8">
            Review the details before placing your request.
          </p>

          {/* Details */}
          <div className="space-y-4 text-slate-700">
            <div className="flex justify-between">
              <span className="text-slate-500">Service</span>
              <span className="font-medium">Estate Errand</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">Shop</span>
              <span className="font-medium">Selected Shop</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">Rider</span>
              <span className="font-medium">Assigned Rider</span>
            </div>
          </div>

          {/* CTA */}
          <button
            className="mt-10 w-full bg-teal-600 text-white py-3 rounded-xl
            hover:bg-teal-700 transition flex items-center justify-center gap-2"
          >
            <CheckCircle className="w-5 h-5" />
            Place Booking
          </button>
        </div>
      </div>
    </section>
  );
}
