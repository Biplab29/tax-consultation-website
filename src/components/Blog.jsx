import { ArrowRight, Clock3, TrendingUp } from "lucide-react";

// ✅ Local images import
import blog1 from "../assets/blog1 (1).png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

// ✅ Blog Data
const blogs = [
  {
    title: "GST Notices Explained: How to Respond",
    category: "GST",
    time: "5 min read",
    image: blog1,
    desc: "Understanding different types of GST notices and best practices for responding effectively.",
  },
  {
    title: "Maximising Tax Deductions for Employees",
    category: "Income Tax",
    time: "7 min read",
    image: blog2,
    desc: "Discover all tax deductions available under old and new tax regimes.",
  },
  {
    title: "India's Tax Landscape: 2026 Budget",
    category: "Updates",
    time: "6 min read",
    image: blog3,
    desc: "Key changes from Union Budget 2026 every taxpayer should know.",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-1 rounded-full bg-teal-100 px-4 py-1 text-xs font-semibold text-teal-700">
              <TrendingUp size={13} />
              Knowledge Hub
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Latest Tax Insights
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Stay updated with GST notifications, tax updates, and expert insights.
            </p>
          </div>

          <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100 sm:w-auto">
            View All Articles
            <ArrowRight size={15} />
          </button>
        </div>

        {/* Cards */}
        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                  className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-teal-600 shadow">
                  {blog.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="mb-3 flex items-center gap-1 text-xs text-slate-500">
                  <Clock3 size={13} />
                  {blog.time}
                </p>

                <h3 className="text-base font-bold text-slate-900">
                  {blog.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {blog.desc}
                </p>

                <button className="mt-5 flex items-center gap-1 text-sm font-medium text-teal-600 transition hover:gap-2">
                  Read Article
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;