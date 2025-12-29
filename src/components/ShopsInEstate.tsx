import { Store, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const shops = [
  {
    name: "SuperMart",
    category: "Groceries",
    open: true,
  },
  {
    name: "Health Plus Pharmacy",
    category: "Pharmacy",
    open: true,
  },
  {
    name: "Quick Snacks",
    category: "Food",
    open: true,
  },
  {
    name: "Mary Shine",
    category: "General",
    open: false,
  },
  {
    name: "Beauty Gold",
    category: "Food",
    open: true,
  },
  {
    name: "Smoke Shop",
    category: "General",
    open: true,
  },
];

export default function ShopsInEstate() {
  const navigate = useNavigate();

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-6">
        Shops in Estate <span>🏪</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {shops.map((shop, index) => (
          <div
            key={index}
            onClick={() => navigate(`/shops/${index + 1}`)}
            className="flex items-center justify-between bg-white rounded-xl
            border border-gray-100 p-5 shadow-sm hover:shadow-md
            transition cursor-pointer"
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                <Store className="w-6 h-6 text-blue-600" />
              </div>

              <div>
                <p className="font-medium text-gray-900">
                  {shop.name}
                </p>
                <p className="text-sm text-gray-500">
                  {shop.category}
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-2 text-sm">
              {shop.open ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-green-600">Open</span>
                </>
              ) : (
                <>
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400">Closed</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
