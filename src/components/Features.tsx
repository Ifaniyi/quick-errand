import { Zap, ShieldCheck, BadgeCheck } from "lucide-react";

export default function Features() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        
        {/* Fast Delivery */}
        <Feature
          icon={<Zap className="w-6 h-6 text-white" />}
          title="Fast Delivery"
          bg="bg-teal-500"
        />

        {/* Safe & Secure */}
        <Feature
          icon={<ShieldCheck className="w-6 h-6 text-white" />}
          title="Safe & Secure"
          bg="bg-emerald-500"
        />

        {/* Verified Riders */}
        <Feature
          icon={<BadgeCheck className="w-6 h-6 text-white" />}
          title="Verified Riders"
          bg="bg-rose-500"
        />
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  bg,
}: {
  icon: React.ReactNode;
  title: string;
  bg: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className={`${bg} w-14 h-14 rounded-xl flex items-center justify-center`}>
        {icon}
      </div>
      <p className="text-slate-700 font-medium">{title}</p>
    </div>
  );
}
