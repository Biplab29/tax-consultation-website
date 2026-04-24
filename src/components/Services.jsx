import advisory from "../assets/service-advisory.png";
import gst from "../assets/service-gst.png";
import income from "../assets/service-income.png";
import mca from "../assets/service-mca.png";
import startup from "../assets/service-startup.png";
import trademark from "../assets/service-trademark.png";

const services = [
  {
    title: "Startup Registration",
    image: startup,
    desc: "Business incorporation made simple — from idea to legal entity. Company, LLP, OPC & more.",
  },
  {
    title: "GST Services",
    image: gst,
    desc: "Complete GST lifecycle support — registration, returns, audits, and advisory.",
  },
  {
    title: "Income Tax",
    image: income,
    desc: "Accurate tax filing and smart planning for individuals and businesses.",
  },
  {
    title: "MCA Compliance",
    image: mca,
    desc: "End-to-end ROC filings, director compliance, and corporate governance.",
  },
  {
    title: "Trademark",
    image: trademark,
    desc: "Protect your brand identity with trademark filing and certification support.",
  },
  {
    title: "Business Advisory",
    image: advisory,
    desc: "Strategic financial and compliance advice for sustainable growth.",
  },
];

const Services = () => {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block rounded-full bg-teal-100 px-4 py-1 text-sm font-medium text-teal-600">
            Our Services
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Comprehensive Tax & Compliance Solutions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500 text-sm sm:text-base">
            From starting your business to managing ongoing compliance, we deliver
            complete solutions under one roof.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Image */}
              <div className="flex justify-center mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-32 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-slate-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-slate-500 leading-6">
                {service.desc}
              </p>

              {/* Button */}
              <button className="mt-4 inline-flex items-center text-sm font-semibold text-teal-600 group-hover:underline">
                Learn More
                <span className="ml-1 transition group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;