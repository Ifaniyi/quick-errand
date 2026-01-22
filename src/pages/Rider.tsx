import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Bike, Clock } from "lucide-react";

const riders = [
  {
    id: "1",
    name: "Daniel",
    rating: 4.8,
    jobs: 120,
    eta: "10–15 mins",
  },
  {
    id: "2",
    name: "Musa",
    rating: 4.6,
    jobs: 98,
    eta: "15–20 mins",
  },
  {
    id: "3",
    name: "Kelvin",
    rating: 4.9,
    jobs: 150,
    eta: "8–12 mins",
  },
];

export default function Riders() {
  const navigate = useNavigate();
  const [selectedRider, setSelectedRider] = useState<string | null>(null);

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

        <h1 className="text-2xl font-semibold text-slate-800 mb-2">
          Select a rider
        </h1>

        <p className="text-slate-500 mb-8">
          Choose an available rider to handle your request.
        </p>

        {/* Riders list */}
        <div className="space-y-4">
          {riders.map((rider) => {
            const isSelected = selectedRider === rider.id;

            return (
              <button
                key={rider.id}
                onClick={() => setSelectedRider(rider.id)}
                className={`w-full text-left bg-white border rounded-2xl p-6 transition
                  ${
                    isSelected
                      ? "border-teal-600 ring-2 ring-teal-100"
                      : "hover:border-slate-300"
                  }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="font-semibold text-slate-800">
                      {rider.name}
                    </h2>

                    <div className="flex items-center gap-1 text-sm mt-1">
                      <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      <span className="font-medium">{rider.rating}</span>
                      <span className="text-slate-400">
                        ({rider.jobs} jobs)
                      </span>
                    </div>
                  </div>

                  <div className="text-right text-sm text-slate-600">
                    <div className="flex items-center gap-1 justify-end">
                      <Clock className="w-4 h-4" />
                      {rider.eta}
                    </div>
                    <div className="flex items-center gap-1 justify-end mt-1">
                      <Bike className="w-4 h-4" />
                      Bike
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Continue */}
        <button
          disabled={!selectedRider}
          onClick={() => navigate("/summary")}
          className={`mt-10 w-full py-3 rounded-xl font-medium transition
            ${
              selectedRider
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
