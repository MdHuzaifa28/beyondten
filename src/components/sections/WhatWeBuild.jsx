import {
  useState,
  useEffect,
  useRef
} from "react";
import {
  Check,
  Lightbulb
} from "lucide-react";
import Button from "../Button";

export default function WhatWeBuild() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // 1. SCROLL DETECTION
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only play once on scroll
        }
      },
      { rootMargin: "-10% 0px -10% 0px" },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // 2. NAV-LINK / REFRESH DETECTION (The "Reset-Then-Play" trick)
    const handleHashChange = () => {
      if (window.location.hash === "#what-we-build") {
        setIsVisible(false);
        setTimeout(() => setIsVisible(true), 50);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <section
      id="what-we-build"
      ref={sectionRef}
      className="relative scroll-mt-10 px-6 py-24 bg-white text-gray-900 overflow-hidden"
    >
      <div className="max-w-lg mx-auto w-full relative z-10">
        {/* Section Header (Fades in first) */}
        <div
          className={`text-center mb-14 transition-all duration-1000 ease-[0.34,1.1,0.64,1] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
            What do you want to launch?
          </h2>
          <p className="text-lg text-gray-500 font-medium">
            Pick your platform. We will handle the rest.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {/* Option A - Website (Fades in second) */}
          <div
            className={`relative group bg-white rounded-[2.5rem] p-8 sm:p-10 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_-4px_rgba(59,130,246,0.1)] transition-all duration-1000 delay-150 ease-[0.34,1.1,0.64,1] hover:-translate-y-1 overflow-hidden ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Subtle Top Accent Glow */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-blue-400 to-blue-600 opacity-80" />

            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Website{" "}
              <span className="text-gray-400 font-medium">in 10 Days</span>
            </h3>

            <ul className="text-gray-600 mb-10 space-y-5 text-lg">
              <li className="flex items-start gap-4">
                <div className="shrink-0 flex items-center justify-center h-7 w-7 rounded-full bg-blue-50 text-blue-600 mt-0.5">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </div>
                <span className="leading-relaxed">
                  Clean. Fast. Looks great on every screen.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="shrink-0 flex items-center justify-center h-7 w-7 rounded-full bg-blue-50 text-blue-600 mt-0.5">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </div>
                <span className="leading-relaxed">
                  Built to attract customers from Day 1.
                </span>
              </li>
            </ul>

            <Button className="w-full text-lg py-4 hover:bg-blue-600">
              Start My Website
            </Button>
          </div>

          {/* Option B - Mobile App (Fades in third) */}
          <div
            className={`relative group bg-white rounded-[2.5rem] p-8 sm:p-10 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_-4px_rgba(168,85,247,0.1)] transition-all duration-1000 delay-300 ease-[0.34,1.1,0.64,1] hover:-translate-y-1 overflow-hidden ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Subtle Top Accent Glow */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-purple-400 to-purple-600 opacity-80" />

            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Mobile App{" "}
              <span className="text-gray-400 font-medium">in 10 Days</span>
            </h3>

            <ul className="text-gray-600 mb-10 space-y-5 text-lg">
              <li className="flex items-start gap-4">
                <div className="shrink-0 flex items-center justify-center h-7 w-7 rounded-full bg-purple-50 text-purple-600 mt-0.5">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </div>
                <span className="leading-relaxed">
                  Simple. Smooth. Easy to use.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="shrink-0 flex items-center justify-center h-7 w-7 rounded-full bg-purple-50 text-purple-600 mt-0.5">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </div>
                <span className="leading-relaxed">
                  Built to test your idea with real people, fast.
                </span>
              </li>
            </ul>

            <Button className="w-full text-lg py-4 hover:bg-purple-600">
              Start My App
            </Button>
          </div>
        </div>

        {/* MVP Note (Fades in last) */}
        <div
          className={`relative mt-12 overflow-hidden bg-gray-50/80 backdrop-blur-sm p-8 rounded-4xl border border-gray-100 text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] transition-all duration-1000 delay-450 ease-[0.34,1.1,0.64,1] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white shadow-sm mb-4">
            <Lightbulb className="w-5 h-5 text-gray-700" strokeWidth={2.5} />
          </div>
          <p className="text-gray-600 text-lg leading-relaxed font-medium">
            <span className="font-bold text-gray-900 block mb-1">
              Important Note
            </span>
            What you get in 10 days is an MVP — the most important, working
            version of your product. Think of it as your{" "}
            <span className="text-gray-900">launchpad</span> to get real users
            immediately, not the final stop.
          </p>
        </div>
      </div>
    </section>
  );
}
