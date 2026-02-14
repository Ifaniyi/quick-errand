import { useLocation } from "react-router-dom";

export default function Riders() {
  const location = useLocation();
  const { service, items } = location.state || {};

  return (
    <section className="min-h-screen bg-slate-50 pt-32">
      <div className="max-w-xl mx-auto px-6">

        <h2 className="text-2xl font-semibold capitalize mb-4">
          Select a rider
        </h2>

        <div className="bg-white rounded-xl p-4 shadow mb-6">
          <p className="text-sm text-slate-500 mb-1">Service</p>
          <p className="font-medium capitalize">{service}</p>

          <p className="text-sm text-slate-500 mt-4 mb-1">Items</p>
          <p>{items}</p>
        </div>

        <p className="text-slate-500">
          Riders coming next 🙂
        </p>

      </div>
    </section>
  );
}
