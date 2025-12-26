import { useParams, useNavigate } from "react-router-dom";
import { Box, ShoppingCart, Pill, Truck } from "lucide-react";

const serviceConfig: Record<
  string,
  {
    title: string;
    description: string;
    icon: React.ReactNode;
  }
> = {
  errands: {
    title: "Errands",
    description: "Quick tasks handled within your estate",
    icon: <Box className="w-8 h-8 text-purple-600" />,
  },
  groceries: {
    title: "Groceries",
    description: "Fresh food and household items delivered",
    icon: <ShoppingCart className="w-8 h-8 text-green-600" />,
  },
  pharmacy: {
    title: "Pharmacy",
    description: "Get medications and health essentials",
    icon: <Pill className="w-8 h-8 text-red-600" />,
  },
  deliveries: {
    title: "Deliveries",
    description: "Send and receive packages easily",
    icon: <Truck className="w-8 h-8 text-teal-600" />,
  },
};

export default function Service() {
  const { service } = useParams();
  const navigate = useNavigate();

  const currentService = service ? serviceConfig[service] : null;

  if (!currentService) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500">Service not found</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Icon */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white shadow flex items-center justify-center">
          {currentService.icon}
        </div>

        {/* Title */}
        <h1 className="text-4xl font-semibold text-slate-800">
          {currentService.title}
        </h1>

        {/* Description */}
        <p className="text-slate-500 mt-4 max-w-xl mx-auto">
          {currentService.description}
        </p>

        {/* Card */}
        <div className="mt-12 p-10 bg-white rounded-2xl shadow-sm border">
          <p className="text-slate-600 mb-8">
            You’re about to request a{" "}
            <span className="font-medium">{currentService.title}</span> service
            inside your estate.
          </p>

          <button
            onClick={() => navigate("/shops")}
            className="px-8 py-3 rounded-xl bg-teal-600 text-white font-medium hover:bg-teal-700 transition"
          >
            Continue
          </button>
        </div>
      </div>
    </section>
  );
}
