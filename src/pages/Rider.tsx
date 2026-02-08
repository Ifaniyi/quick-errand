import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Star } from "lucide-react";

const riders = [
  {
    id: "1",
    name: "Daniel",
    rating: 4.8,
    eta: "10–15 mins",
  },
  {
    id: "2",
    name: "Musa",
    rating: 4.6,
    eta: "15–20 mins",
  },
  {
    id: "3",
    name: "Kelvin",
    rating: 4.9,
    eta: "8–12 mins",
  },
];

export default function Rider() {
  const navigate = useNavigate();
  const location = useLocation();

  const { service, shop, userLocation } = location.state || {};

  const [selectedRider, setSelectedRider] = useState<any>(null);

  if (!service) {
    return <p className="text-center mt-20">No data</p>;
  }

  return (
    <section className="min-h-screen bg-slate-50 py-24">
      <div className="max-w-3xl mx-auto px-6">

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <h1 className="text-2xl font-semibold mb-6">Select Rider</h1>

        <div className="space-y-4">
          {riders.map((rider) => (
            <button
              key={rider.id}
              onClick={() => setSelectedRider(rider)}
              className={`w-full text-left bg-white border rounded-xl p-6 ${
                selectedRider?.id === rider.id
                  ? "border-teal-600"
                  : ""
              }`}
            >
              <h2 className="font-medium">{rider.name}</h2>

              <div className="flex items-center gap-1 text-sm mt-1">
                <Star className="w-4 h-4" />
                {rider.rating}
              </div>

              <p className="text-sm mt-1">{rider.eta}</p>
            </button>
          ))}
        </div>

        <button
          disabled={!selectedRider}
          onClick={() =>
            navigate("/summary", {
              state: {
                service,
                shop,
                userLocation,
                rider: selectedRider,
              },
            })
          }
          className={`mt-10 w-full py-3 rounded-xl ${
            selectedRider
              ? "bg-teal-600 text-white"
              : "bg-slate-200 text-slate-400"
          }`}
        >
          Continue
        </button>
      </div>
    </section>
  );
}
