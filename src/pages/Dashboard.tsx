import ShopsInEstate from "../components/ShopsInEstate";
import Riders from "../components/Riders";

export default function Dashboard() {
  return (
    <section className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-2xl font-semibold mb-6">
          Welcome 👋
        </h1>

        <div className="mb-12">
          <button className="bg-teal-500 text-white px-6 py-3 rounded-xl">
            Create Request
          </button>
        </div>

        <ShopsInEstate />
        <Riders />

      </div>
    </section>
  );
}
