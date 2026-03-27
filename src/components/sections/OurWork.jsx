import {
  useState,
  useEffect,
  useRef
} from "react";

export default function OurWork() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // 1. SCROLL DETECTION
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only play once on natural scroll
        }
      },
      { rootMargin: "-10% 0px -10% 0px" },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // 2. NAV-LINK / REFRESH DETECTION (The "Reset-Then-Play" trick)
    const handleHashChange = () => {
      if (window.location.hash === "#work") {
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
      id="work"
      ref={sectionRef}
      className="relative scroll-mt-10 px-6 py-20 bg-white text-gray-900 overflow-hidden"
    >
      <div className="max-w-lg mx-auto w-full relative z-10">
        {/* Section Header (Fades in first) */}
        <h2
          className={`text-center text-3xl sm:text-4xl font-extrabold tracking-tight mb-12 text-gray-900 leading-tight transition-all duration-1000 ease-[0.34,1.1,0.64,1] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Built in 10 days.
          <br />
          <span className="text-gray-400">Ready for the real world.</span>
        </h2>

        <div className="flex flex-col gap-10">
          {/* Project 1: dotnovexure (Fades in second) */}
          <div
            className={`group relative bg-white rounded-4xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-1000 delay-150 ease-[0.34,1.1,0.64,1] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Placeholder Area */}
            <div className="relative h-60 w-full bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] z-0" />
              <div className="relative z-10 text-sm font-semibold tracking-widest text-gray-400 uppercase">
                [ dotnovexure.com ]
              </div>
            </div>

            <div className="p-8">
              {/* Small Category Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 rounded-full bg-blue-50 text-xs font-bold text-blue-600 tracking-wide uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                Web App
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-900 transition-colors duration-500 group-hover:text-blue-600">
                dotnovexure
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                A sharp, professional website built to capture leads from the
                moment it went live.
              </p>
            </div>
          </div>

          {/* Project 2: Local Booking App (Fades in third) */}
          <div
            className={`group relative bg-white rounded-4xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-1000 delay-300 ease-[0.34,1.1,0.64,1] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Placeholder Area */}
            <div className="relative h-60 w-full bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] z-0" />
              <div className="relative z-10 text-sm font-semibold tracking-widest text-gray-400 uppercase">
                [ App Screenshot ]
              </div>
            </div>

            <div className="p-8">
              {/* Small Category Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 rounded-full bg-purple-50 text-xs font-bold text-purple-600 tracking-wide uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-600"></span>
                Mobile App
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-900 transition-colors duration-500 group-hover:text-purple-600">
                Local Booking App
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                A clean app that lets users find and book services right from
                their phone. Simple. Fast. It just works.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
