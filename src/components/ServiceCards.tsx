import { Box, ShoppingCart, Link2, Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ServiceCards() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium text-slate-800">
            What Do You Need?
          </h2>
          <p className="text-slate-500 mt-2">
            Choose a service to get started
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <ServiceCard
            icon={<Box className="w-6 h-6 text-white" />}
            title="Errands"
            subtitle="Quick errands"
            color="purple"
          />

          <ServiceCard
            icon={<ShoppingCart className="w-6 h-6 text-white" />}
            title="Groceries"
            subtitle="Fresh items"
            color="green"
          />

          <ServiceCard
            icon={<Link2 className="w-6 h-6 text-white" />}
            title="Pharmacy"
            subtitle="Health needs"
            color="red"
          />

          <ServiceCard
            icon={<Truck className="w-6 h-6 text-white" />}
            title="Deliveries"
            subtitle="Send packages"
            color="teal"
          />

        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  subtitle,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  color: "purple" | "green" | "red" | "teal";
}) {
  const navigate = useNavigate();

  const styles = {
    purple: "hover:border-purple-400 hover:shadow-purple-100 bg-purple-500",
    green: "hover:border-green-400 hover:shadow-green-100 bg-green-500",
    red: "hover:border-red-400 hover:shadow-red-100 bg-red-500",
    teal: "hover:border-teal-400 hover:shadow-teal-100 bg-teal-500",
  };

  const handleClick = () => {
    navigate(`/services/${title.toLowerCase()}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`border border-slate-200 rounded-2xl p-8 text-center cursor-pointer
      transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
      hover:border-2`}
    >
      <div
        className={`w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center
        ${styles[color].split(" ")[2]}`}
      >
        {icon}
      </div>

      <h3 className="text-lg font-medium text-slate-800">{title}</h3>
      <p className="text-slate-500 text-sm mt-1">{subtitle}</p>
    </div>
  );
}
