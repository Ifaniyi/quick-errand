import { Star } from "lucide-react";

const riders = [
  {
    name: "Alex Johnson",
    initial: "A",
    rating: "4.9",
    jobs: 234,
  },
  {
    name: "Sarah Williams",
    initial: "S",
    rating: "4.8",
    jobs: 189,
  },
  {
    name: "Mike Chen",
    initial: "M",
    rating: "5.0",
    jobs: 312,
  },
  {
    name: "Emma Davis",
    initial: "E",
    rating: "4.7",
    jobs: 156,
  },
];

export default function Riders() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
        Our Riders <span>🚴‍♂️</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {riders.map((rider) => (
          <div
            key={rider.name}
            className="bg-white rounded-xl border p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                {rider.initial}
              </div>

              <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                Available
              </span>
            </div>

            <h3 className="font-medium">{rider.name}</h3>

            <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <span>{rider.rating}</span>
              <span>•</span>
              <span>{rider.jobs} jobs</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
