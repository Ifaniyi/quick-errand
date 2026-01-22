import { useNavigate } from "react-router-dom";
import { CheckCircle, MapPin, Store, Bike } from "lucide-react";

export default function Summary() {
  const navigate = useNavigate();

  // Temporary static data (will come from state / backend later)
  const summary = {
    service: "Groceries",
    userLocation: "Block A, Flat 2",
    shop: "SuperMart",
    rider: "Rider #1",
    eta: "10–15 mins",
  };

  return (
    <section className="min-h-screen bg-slate-50 py-24">
      <div className="max-w-xl mx-auto px-6">
        
        <h1 className="text-2xl font-semibold text-slate-800 mb-2">
          Request Summary
        </h1>

        <p className="text-slate-500 mb-8">
          Review your request before confirming.
        </p>

        {/* Summary Card */}
        <div className="bg-white border rounded-2xl p-6 space-y-6 shadow-sm">
          
          {/* Service */}
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-teal-600" />
            <div>
              <p className="text-sm text-slate-500">Service</p>
              <p className="font-medium text-slate-800">
                {summary.service}
              </p>
            </div>
          </div>

          {/* User Location */}
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-slate-600" />
            <div>
              <p className="text-sm text-slate-500">Your location</p>
              <p className="font-medium text-slate-800">
                {summary.userLocation}
              </p>
            </div>
          </div>

          {/* Shop */}
          <div className="flex items-center gap-3">
            <Store className="w-5 h-5 text-slate-600" />
            <div>
              <p className="text-sm text-slate-500">Shop</p>
              <p className="font-medium text-slate-800">
                {summary.shop}
              </p>
            </div>
          </div>

          {/* Rider */}
          <div className="flex items-center gap-3">
            <Bike className="w-5 h-5 text-slate-600" />
            <div>
              <p className="text-sm text-slate-500">Rider</p>
              <p className="font-medium text-slate-800">
                {summary.rider} • {summary.eta}
              </p>
            </div>
          </div>
        </div>

        {/* Confirm */}
        <button
          onClick={() => navigate("/book")}
          className="mt-10 w-full bg-teal-600 text-white py-3 rounded-xl
          hover:bg-teal-700 transition font-medium"
        >
          Confirm & Book Rider
        </button>
      </div>
    </section>
  );
}
