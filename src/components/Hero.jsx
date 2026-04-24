import { Play, ShieldCheck } from "lucide-react";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-14">
        {/* Left Content */}
        <div>
          <span className="mb-10 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-xs font-semibold text-blue-700">
            <ShieldCheck size={14} />
            Trusted by 500+ businesses across India
          </span>

          <h1 className="max-w-2xl text-[38px] font-extrabold leading-[1.06] tracking-tight text-slate-900 sm:text-5xl lg:text-[56px]">
            Your Complete Partner for{" "}
            <span className="text-blue-500">Tax & Compliance</span> in India
          </h1>

          <p className="mt-9 max-w-xl text-[15px] leading-7 text-slate-700">
            Expert Chartered Accountants providing end-to-end solutions for
            Startup Registration, GST, Income Tax, MCA Services, and Trademark
            Protection.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-700/25 transition hover:bg-blue-800 sm:w-auto">
              Get Free Consultation
              <span>→</span>
            </button>

            <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-8 py-4 text-sm font-bold text-blue-800 transition hover:bg-blue-100 sm:w-auto">
              <Play size={15} />
              Watch How It Works
            </button>
          </div>

          <div className="mt-10 max-w-xl border-t border-slate-200 pt-7">
            <div className="grid max-w-sm grid-cols-3 gap-8">
              {[
                ["500+", "CLIENTS"],
                ["10+", "YEARS"],
                ["99%", "SUCCESS"],
              ].map(([num, text]) => (
                <div key={num}>
                  <h3 className="text-3xl font-extrabold leading-none text-slate-900">
                    {num}
                  </h3>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-slate-500">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <img
            src={hero}
            alt="Tax consultant"
            className="w-full max-w-[620px] object-contain lg:max-w-[680px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;