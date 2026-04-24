import {
  CalendarCheck,
  ClipboardCheck,
  FileText,
  Headphones,
  Send,
} from "lucide-react";

const steps = [
  [
    "Free Consultation",
    "Understand your business goals and compliance requirements.",
    CalendarCheck,
  ],
  ["Assessment", "Identify applicable laws, registrations, and filings.", FileText],
  [
    "Documentation",
    "Secure and guided document submission.",
    ClipboardCheck,
  ],
  ["Execution", "Accurate preparation and timely submission.", Send],
  ["Support", "Filing confirmation and ongoing assistance.", Headphones],
];

const Process = () => {
  return (
    <section className="bg-slate-50 py-16 text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <p className="inline-block rounded-full bg-teal-100 px-4 py-1 text-xs font-semibold text-teal-600">
          How It Works
        </p>

        <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Simple & Proven Process
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500">
          A streamlined approach designed to make compliance hassle-free.
        </p>

        {/* Timeline */}
        <div className="relative mx-auto mt-16 max-w-6xl">
          {/* Line */}
          <div className="absolute left-[7%] right-[7%] top-8 hidden h-[3px] bg-teal-300 lg:block"></div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map(([title, desc, Icon], index) => (
              <div
                key={title}
                className="relative flex flex-col items-center text-center"
              >
                {/* Circle */}
                <div className="z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md">
                  <Icon className="text-teal-600" size={22} />
                </div>

                {/* Step Label */}
                <p className="mt-3 text-[10px] font-semibold text-teal-600">
                  STEP {index + 1}
                </p>

                {/* Title */}
                <h3 className="mt-1 text-sm font-bold text-slate-900">
                  {title}
                </h3>

                {/* Description */}
                <p className="mt-1 max-w-[160px] text-xs text-slate-500">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;