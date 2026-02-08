import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle, MapPin, Store, Bike } from "lucide-react";

export default function Summary() {
  const navigate = useNavigate();
  const location = useLocation();

  const { rider } = location.state || {};

  if (!rider) {
    return <p className="text-center mt-20">No data found</p>;
  }

  return (
    <section className="min-h-screen bg-slate-50 py-24">
      <div className="max-w-xl mx-auto px-6">

        <h1 className="text-2xl font-semibold text-slate-800 mb-2">
          Request Summary
        </h1>

        <div className="bg-white border rounded-2xl p-6 space-y-6 shadow-sm">

          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-teal-600" />
            <div>
              <p className="text-sm text-slate-500">Rider</p>
              <p className="font-medium">{rider.name}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Bike className="w-5 h-5" />
            <p>{rider.eta}</p>
          </div>

        </div>

        <button
          onClick={() => navigate("/book")}
          className="mt-10 w-full bg-teal-600 text-white py-3 rounded-xl"
        >
          Confirm & Book Rider
        </button>
      </div>
    </section>
  );
}
