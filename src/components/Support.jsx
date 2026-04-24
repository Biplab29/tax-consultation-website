const Support = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-teal-500 via-teal-500 to-teal-600 px-6 py-14 text-center text-white sm:px-10">
        
        {/* Soft Grid Background */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-xl">
          
          <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">
            Looking for Reliable Tax & <br />
            Compliance Support?
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm text-teal-50">
            Talk to our Chartered Accountants today and experience stress-free
            compliance.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            
            <button className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-900 shadow-md">
              Get Free Consultation →
            </button>

            <button className="rounded-full border border-white/40 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur">
               Call Us Now
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;