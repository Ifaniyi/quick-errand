import bikeImg from "../assets/bike.png";
import errandsImg from "../assets/errand.png";
import groceriesImg from "../assets/groceries.png";
import pharmacyImg from "../assets/pharmacy.png";
import deliveryImg from "../assets/delivery.png";




export default function Home() {
  return (
    <main className="pt-32">

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-5xl font-semibold leading-tight">
            Super Fast Delivery
            <br />
            <span className="text-slate-400">to your Doorstep</span>
          </h1>

          <p className="text-slate-500 mt-4 max-w-md">
            Get groceries, medicines or anything else from local shops,
            delivered in minutes.
          </p>

          <button
            className="mt-8 bg-teal-600 text-white px-8 py-3 rounded-xl hover:bg-teal-700 transition"
          >
            Get Started
          </button>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <img
            src={bikeImg}
            alt="delivery bike"
            className="w-full max-w-md"
          />
        </div>

      </section>

      {/* SERVICES CARDS */}
      <section className="max-w-6xl mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* CARD */}
        <div className="border rounded-2xl p-6 hover:shadow-lg transition">
          <img src={errandsImg} className="w-14 mb-4" />
          <h3 className="font-semibold">Errands</h3>
          <p className="text-sm text-slate-500 mt-2">
            Send us to pick up anything you need.
          </p>
        </div>

        <div className="border rounded-2xl p-6 hover:shadow-lg transition">
          <img src={groceriesImg} className="w-14 mb-4" />
          <h3 className="font-semibold">Groceries</h3>
          <p className="text-sm text-slate-500 mt-2">
            Get fresh fruits, vegetables and more.
          </p>
        </div>

        <div className="border rounded-2xl p-6 hover:shadow-lg transition">
          <img src={pharmacyImg} className="w-14 mb-4" />
          <h3 className="font-semibold">Pharmacy</h3>
          <p className="text-sm text-slate-500 mt-2">
            Order medicines from nearby pharmacies.
          </p>
        </div>

        <div className="border rounded-2xl p-6 hover:shadow-lg transition">
          <img src={deliveryImg} className="w-14 mb-4" />
          <h3 className="font-semibold">Delivery</h3>
          <p className="text-sm text-slate-500 mt-2">
            Fast delivery from your favorite restaurants.
          </p>
        </div>

      </section>

      {/* HOW IT WORKS */}
<section className="max-w-6xl mx-auto px-6 mt-24">

  <h2 className="text-3xl font-semibold text-center mb-12">
    How it works
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

    {/* Card 1 */}
    <div className="bg-white p-6 rounded-xl text-center shadow-sm">
      <img src={errandsImg} className="w-20 mx-auto mb-4" />
      <h3 className="font-semibold mb-2">Place Request</h3>
      <p className="text-slate-500 text-sm">
        Tell us what you need delivered.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white p-6 rounded-xl text-center shadow-sm">
      <img src={groceriesImg} className="w-20 mx-auto mb-4" />
      <h3 className="font-semibold mb-2">We Pick Up</h3>
      <p className="text-slate-500 text-sm">
        Our riders collect your items.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white p-6 rounded-xl text-center shadow-sm">
      <img src={pharmacyImg} className="w-20 mx-auto mb-4" />
      <h3 className="font-semibold mb-2">Fast Delivery</h3>
      <p className="text-slate-500 text-sm">
        Items arrive in minutes.
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-white p-6 rounded-xl text-center shadow-sm">
      <img src={deliveryImg} className="w-20 mx-auto mb-4" />
      <h3 className="font-semibold mb-2">Enjoy</h3>
      <p className="text-slate-500 text-sm">
        Sit back and relax.
      </p>
    </div>

  </div>

</section>


    </main>
  );
}
