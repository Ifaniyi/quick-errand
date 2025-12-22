import Features from "../components/Features";
import ServiceCards from "../components/ServiceCards";
import ShopsInEstate from "../components/ShopsInEstate";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-teal-700 to-teal-600 text-white">
        <div className="max-w-5xl mx-auto px-6 py-28 text-center">
          
          {/* Location pill */}
          <span className="inline-block bg-white/20 backdrop-blur px-5 py-2 rounded-full text-sm mb-6">
            Lagos Eti-Osa Estate Service
          </span>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-4">
            We Run Your Errands, You Relax <br /> at Home
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-white/90">
            Fast, reliable errand service within your estate
          </p>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-20"
          >
            <path
              d="M0,0V60c80,30,160,30,240,10s160-40,240-30,160,50,240,50,160-30,240-40,160,10,240,20V0Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>
      <Features />
      <ServiceCards />
      <ShopsInEstate />

    </>
  );
}
