import { useParams, useNavigate } from "react-router-dom";
import { MapPin, Store } from "lucide-react";
import { useState } from "react";

type ServiceKey = "errands" | "groceries" | "pharmacy" | "deliveries";

export default function WhereTo() {
  const { service } = useParams<{ service: ServiceKey }>();
  const navigate = useNavigate();

  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [shop, setShop] = useState("");

  const isValid = deliveryLocation && shop;

  if (!service) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500">Invalid request</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 py-24">
      <div className="max-w-xl mx-auto px-6">
        
        <h1 className="text-3xl font-semibold text-slate-800 mb-2 capitalize">
          {service} request
        </h1>

        <p className="text-slate-500 mb-10">
          Tell us where the items should be delivered and select a shop.
        </p>

        {/* Delivery location */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Delivery location
          </label>
          <div className="flex items-center gap-3 bg-white border rounded-xl px-4 py-3">
            <MapPin className="w-5 h-5 text-slate-400" />
            <input
              value={deliveryLocation}
              onChange={(e) => setDeliveryLocation(e.target.value)}
              placeholder="e.g. Block A, Flat 2"
              className="w-full outline-none"
            />
          </div>
        </div>

        {/* Shop */}
        <div className="mb-10">
          <label className="block text-sm font-medium mb-2">
            Select shop
          </label>
          <div className="flex items-center gap-3 bg-white border rounded-xl px-4 py-3">
            <Store className="w-5 h-5 text-slate-400" />
            <select
              value={shop}
              onChange={(e) => setShop(e.target.value)}
              className="w-full outline-none bg-transparent"
            >
              <option value="">Choose a shop</option>
              <option value="SuperMart">SuperMart</option>
              <option value="Health Plus">Health Plus Pharmacy</option>
              <option value="Quick Snacks">Quick Snacks</option>
            </select>
          </div>
        </div>

        {/* Continue */}
        <button
          disabled={!isValid}
          onClick={() => navigate("/riders/1")}
          className={`w-full py-3 rounded-xl font-medium transition
            ${
              isValid
                ? "bg-teal-600 text-white hover:bg-teal-700"
                : "bg-slate-200 text-slate-400 cursor-not-allowed"
            }`}
        >
          Continue
        </button>
      </div>
    </section>
  );
}
