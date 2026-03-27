import {
  useState,
  useEffect,
  useRef
} from "react";
import {
  ArrowRight,
  Mail,
  Phone,
  MessageCircle
} from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa6";
import Button from "../Button";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // 1. SCROLL DETECTION
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only play once
        }
      },
      // Trigger slightly earlier so it starts animating just as it comes into view
      { rootMargin: "0px 0px 0px 0px" },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="footer"
      ref={sectionRef}
      className={`relative px-6 py-20 pb-24 bg-gray-950 text-white text-center rounded-t-[3rem] sm:rounded-t-[4rem] overflow-hidden mt-4 transition-all duration-1000 ease-[0.34,1.1,0.64,1] ${
        isVisible
          ? "opacity-100 translate-y-0 shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.1)]"
          : "opacity-0 translate-y-12 shadow-none"
      }`}
    >
      {/* Ambient Background Glows */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-linear-to-tr from-blue-900/30 to-purple-900/30 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse duration-10000 transition-opacity delay-300 ${
          isVisible ? "opacity-60" : "opacity-0"
        }`}
      />

      <div className="max-w-lg mx-auto w-full relative z-10 flex flex-col items-center">
        {/* Soft Status Pill (Fades in first) */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8 text-sm text-gray-300 font-medium transition-all duration-1000 delay-150 ease-[0.34,1.1,0.64,1] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 duration-1000"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Currently accepting new clients
        </div>

        {/* Headline (Fades in second) */}
        <h2
          className={`text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 text-white leading-tight transition-all duration-1000 delay-300 ease-[0.34,1.1,0.64,1] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Ready to launch?
        </h2>

        {/* Subtext (Fades in third) */}
        <p
          className={`text-lg text-gray-400 mb-12 leading-relaxed font-medium transition-all duration-1000 delay-450 ease-[0.34,1.1,0.64,1] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Stop waiting for months. Contact us today, get a reply within{" "}
          <span className="text-gray-200">24 hours</span>, and go live in
          exactly 10 days.
        </p>

        {/* Massive Final CTA Button (Fades in fourth) */}
        <div
          className={`w-full flex flex-col gap-4 mb-16 transition-all duration-1000 delay-600 ease-[0.34,1.1,0.64,1] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Massive Final CTA Button (Fades in fourth) */}
          <div
            className={`w-full flex flex-col gap-4 mb-16 transition-all duration-1000 delay-600 ease-[0.34,1.1,0.64,1] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              href="mailto:team@beyondten.in"
              variant="accent"
              className="w-full text-xl py-5"
            >
              Book a Free Call
              <span className="transition-transform duration-500 group-hover:translate-x-1">
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
            <p className="text-sm text-gray-500 font-medium tracking-wide">
              (Guaranteed reply within 24 hours)
            </p>
          </div>
          <p className="text-sm text-gray-500 font-medium tracking-wide">
            (Guaranteed reply within 24 hours)
          </p>
        </div>

        {/* Glassmorphic Contact Links (Fades in last) */}
        <div
          className={`flex flex-col gap-4 text-lg font-medium text-gray-300 bg-white/5 backdrop-blur-xl w-full py-6 rounded-3xl border border-white/10 shadow-inner transition-all duration-1000 delay-750 ease-[0.34,1.1,0.64,1] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="mailto:team@beyondten.in"
            className="flex items-center justify-center gap-3 active:opacity-70 hover:text-white transition-colors duration-300 group"
          >
            <Mail className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />{" "}
            team@beyondten.in
          </a>
          <div className="h-px w-16 bg-white/10 mx-auto"></div>

          <a
            href="tel:+917439680877"
            className="flex items-center justify-center gap-3 active:opacity-70 hover:text-white transition-colors duration-300 group"
          >
            <Phone className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />{" "}
            +91 7439680877
          </a>
          <div className="h-px w-16 bg-white/10 mx-auto"></div>

          <a
            href="https://wa.me/917439680877"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 active:opacity-70 hover:text-white transition-colors duration-300 group"
          >
            <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />{" "}
            WhatsApp Us
          </a>
          <div className="h-px w-16 bg-white/10 mx-auto"></div>

          <div className="flex justify-center gap-6 pt-2">
            <a
              href="https://instagram.com/beyondten.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 active:opacity-70 hover:text-white transition-colors duration-300 group text-sm"
            >
              {/* Added react-icons Instagram logo */}
              <FaInstagram className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />{" "}
              beyondten.in
            </a>
            <a
              href="https://linkedin.com/company/beyondten"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 active:opacity-70 hover:text-white transition-colors duration-300 group text-sm"
            >
              {/* Added react-icons LinkedIn logo */}
              <FaLinkedinIn className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />{" "}
              beyondten.in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
