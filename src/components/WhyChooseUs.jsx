import {
  BadgeCheck,
  Clock,
  Headphones,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const items = [
  ["CA-Led Expertise", "Services led by qualified Chartered Accountants with deep regulatory knowledge.", BadgeCheck],
  ["Transparent Practices", "Clear pricing, honest guidance, and absolutely no hidden charges.", ShieldCheck],
  ["End-to-End Support", "From documentation to filing and post-submission support.", Headphones],
  ["Timely Compliance", "Never miss a deadline with proactive reminders and tracking.", Clock],
  ["PAN-India Service", "Serving clients across India with seamless online consultations.", MapPin],
];

const WhyChoose = () => {
  return (
    <section className="bg-slate-100 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="inline-block rounded-full bg-orange-100 px-4 py-1 text-xs font-semibold text-orange-600">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Trusted by Businesses Across India
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500">
            Our commitment to excellence has earned us the trust of startups, SMEs, and professionals.
          </p>
        </div>

        {/* Items */}
       {/* Items */}
<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
  {items.map(([title, desc, Icon]) => (
    <div key={title} className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-500 text-white">
        <Icon size={20} />
      </div>

      <div>
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-500">{desc}</p>
      </div>
    </div>
  ))}
</div>

{/* Certification row */}
{/* Certification row */}
<div className="mt-16 border-t border-slate-200 pt-8">
  <div className="mx-auto flex max-w-sm items-center justify-center gap-10 text-center">
    {[
      ["ICAI"],
      ["GST"],
      ["ISO"],
      ["MSME"],
    ].map(([title, text]) => (
      <div key={title}>
        <h4 className="text-[11px] font-bold text-slate-500">{title}</h4>
        <p className="mt-1 text-[9px] text-slate-400">{text}</p>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};

export default WhyChoose;