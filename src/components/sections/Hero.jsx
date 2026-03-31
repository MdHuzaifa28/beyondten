import { 
  useState, 
  useEffect
} from "react";
import { 
  ArrowRight, 
  ArrowDown
} from "lucide-react";
import Button from "../Button";

export default function Hero() {
  // State to trigger the entrance animations
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Wait a tiny fraction of a second to ensure the DOM is ready, then trigger the animations so they feel smooth upon load/refresh.
    const id = requestAnimationFrame(() => {
      setIsMounted(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center px-6 py-12 -mt-8 sm:-mt-4 bg-white text-gray-900 overflow-hidden"
    >
      {/* Ambient Background Glows */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-linear-to-tr from-blue-100/40 to-purple-50/40 blur-[100px] rounded-full pointer-events-none -z-10 animate-pulse duration-10000 transition-opacity ${isMounted ? "opacity-60" : "opacity-0"}`}
      />
      <div
        className={`absolute bottom-0 right-0 w-100 h-100 bg-linear-to-bl from-blue-50/50 to-transparent blur-[80px] rounded-full pointer-events-none -z-10 transition-opacity duration-1000 delay-300 ${isMounted ? "opacity-50" : "opacity-0"}`}
      />

      <div className="relative max-w-md mx-auto w-full z-10">
        {/*Availability Badge (Fades in and slides up slightly) */}
        <div
          className={`flex justify-center mb-8 transition-all duration-1000 ease-[0.34,1.1,0.64,1] ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-gray-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] text-sm text-gray-600 font-medium transition-all duration-700 hover:bg-white hover:shadow-[0_4px_15px_-3px_rgba(0,0,0,0.08)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 duration-1000"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for only 1 more project
          </div>
        </div>

        {/* Headline (Fades in after badge) */}
        <h1
          className={`text-[2.5rem] sm:text-5xl font-extrabold tracking-tight leading-[1.15] mb-6 text-transparent bg-clip-text bg-linear-to-br from-gray-900 via-gray-800 to-gray-500 text-center selection:text-gray-900 selection:bg-blue-200 transition-all duration-1000 delay-150 ease-[0.34,1.1,0.64,1] ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Launch Your SaaS in exactly 10 Days
        </h1>

        {/* Subtext (Fades in after headline) */}
        <p
          className={`text-lg text-gray-500 mb-10 leading-relaxed font-medium text-center transition-all duration-1000 delay-300 ease-[0.34,1.1,0.64,1] ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Tell us your idea. We build it. You launch it. <br />
          <span className="text-gray-800 transition-colors duration-500">
            Simple, fast, and ready for real users.
          </span>
        </p>

        {/* Primary CTA (Fades in after subtext) */}
        <div
          className={`flex flex-col gap-4 mb-16 transition-all duration-1000 delay-450 ease-[0.34,1.1,0.64,1] ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button
            href="https://wa.me/917980669925?text=Hi%20beyondten!%20I%20have%20an%20idea%20for%20a%20project.%20Let's%20start!"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-lg py-4"
          >
            Start My Project
            <span className="transition-transform duration-500 group-hover:translate-x-1">
              <ArrowRight className="w-5 h-5" />
            </span>
          </Button>
          <p className="text-sm text-center text-gray-400 font-medium tracking-wide">
            (We reply within 24 hours)
          </p>
        </div>

        {/* Secondary CTA (Fades in last) */}
        <div
          className={`text-center transition-all duration-1000 delay-600 ease-[0.34,1.1,0.64,1] ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#how-it-works"
            className="group inline-flex items-center justify-center gap-2 text-gray-400 font-medium active:opacity-70 transition-all duration-500 hover:text-gray-900"
          >
            How it works
            <span className="animate-bounce duration-1000">
              <ArrowDown className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
