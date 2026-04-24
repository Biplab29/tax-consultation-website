import { Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";

const socialLinks = [
  { label: "LinkedIn", Icon: FaLinkedinIn, href: "#" },
  { label: "Facebook", Icon: FaFacebookF, href: "#" },
  { label: "Instagram", Icon: FaInstagram, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-[#050918] text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-6 inline-block rounded-lg bg-white p-2">
            <img src={logo} alt="BTAX Advisors" className="h-12 w-auto" />
          </div>

          <p className="max-w-xs text-sm leading-7 text-slate-400">
            Professional tax and compliance advisory firm simplifying complex
            regulations for individuals, startups, and businesses across India.
          </p>

          <div className="mt-7 flex gap-3">
            {socialLinks.map(({ label, Icon, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition hover:bg-teal-600 hover:text-white"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-7 text-sm font-extrabold tracking-wider text-white">
            QUICK LINKS
          </h3>
          <ul className="space-y-5 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-7 text-sm font-extrabold tracking-wider text-white">
            SERVICES
          </h3>
          <ul className="space-y-5 text-sm">
            <li>Startup Registration</li>
            <li>GST Services</li>
            <li>Income Tax</li>
            <li>MCA Compliance</li>
            <li>Trademark Registration</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-7 text-sm font-extrabold tracking-wider text-white">
            CONTACT
          </h3>

          <div className="space-y-5 text-sm">
            <p className="flex items-start gap-4 leading-6">
              <MapPin className="mt-1 shrink-0 text-teal-500" size={18} />
              <span>
                B Tax Advisors India Pvt Ltd (Auditors and Tax Consultant),
                Dodda Banaswadi Main Road, Jaibharath Nagar, Sanjeevappa Layout,
                Maruthi Sevanagar, Bengaluru, Karnataka, India
              </span>
            </p>

            <p className="flex items-center gap-4">
              <Phone className="shrink-0 text-teal-500" size={18} />
              <span>+91 9110247032</span>
            </p>

            <p className="flex items-center gap-4">
              <Mail className="shrink-0 text-teal-500" size={18} />
              <span className="break-all">ashwathnayak33@gmail.com</span>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 Advisors4Tax. All rights reserved.</p>

          <div className="flex gap-6">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;