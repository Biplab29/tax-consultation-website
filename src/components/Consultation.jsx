import { ArrowRight, CalendarDays } from "lucide-react";

const cards = [
  ["Startup & Registration", "1 Hour", CalendarDays],
  ["Trademark Advisory", "1 Hour", CalendarDays],
  ["GST Consultation", "1 Hour", CalendarDays],
  ["Income Tax Planning", "1 Hour", CalendarDays],
];


const Consultation = () => {
  return (
    <section className="relative overflow-hidden bg-[#081120] py-16 text-white">
      <div className="absolute left-20 top-20 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute right-10 top-0 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="inline-block rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold text-white">
          Book Online
        </p>

        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          Schedule Your Free Consultation
        </h2>

        <p className="mt-3 text-xs text-slate-400 sm:text-sm">
          Get expert advice at your convenience. No obligations, just genuine
          guidance.
        </p>

        <div className="mx-auto mt-9 grid max-w-6xl gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map(([title, time, Icon]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/10 p-5 text-left backdrop-blur"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/20 text-teal-400">
                <Icon size={20} />
              </div>

              <h3 className="text-sm font-bold text-white">{title}</h3>

              <p className="mt-2 text-xs text-slate-400">
                {time} <span className="text-slate-500">•</span>{" "}
                <span className="font-bold text-teal-400">Free</span>
              </p>

              <button className="mt-5 w-full rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold text-white hover:bg-white/20">
                Book Now
              </button>
            </div>
          ))}
        </div>

        <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-xs font-bold text-white hover:bg-teal-600">
          View All Options
          <ArrowRight size={14} />
        </button>
      </div>
    </section>
  );
};

export default Consultation;