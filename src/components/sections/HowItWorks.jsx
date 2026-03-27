import {
  useState,
  useEffect,
  useRef
} from "react";

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // SCROLL DETECTION: Watch for the section entering the viewport normally
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Once it becomes visible via scroll, disconnect so it doesn't replay annoyingly on tiny scrolls
          observer.disconnect();
        }
      },
      { rootMargin: "-10% 0px -10% 0px" },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // NAV-LINK / REFRESH DETECTION: Watch the URL Hash
    const handleHashChange = () => {
      // If the URL ends with #how-it-works (meaning they clicked the nav link or loaded the page directly to it)
      if (window.location.hash === "#how-it-works") {
        // Instantly hide it...
        setIsVisible(false);
        // ...then wait 50ms (enough time for the browser to register the false state) and trigger the animation again.
        setTimeout(() => setIsVisible(true), 50);
      }
    };

    // Run the hash check immediately in case they refresh the page while already on this section
    handleHashChange();

    // Listen for hash changes (when they click the nav links)
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup listeners
    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative scroll-mt-10 px-6 py-24 bg-gray-50/50 text-gray-900 overflow-hidden"
    >
      <div className="max-w-lg mx-auto w-full relative z-10">
        {/* Section Header (Fades in first) */}
        <div
          className={`text-center mb-14 transition-all duration-1000 ease-[0.34,1.1,0.64,1] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
            3 Simple Steps
          </h2>
          <p className="text-lg text-gray-500 font-medium">
            No chaos. Just a clear, calm path to launch.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {/* Step 1 Card */}
          <div
            className={`relative group bg-white rounded-4xl p-8 sm:p-10 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-1000 delay-150 ease-[0.34,1.1,0.64,1] hover:-translate-y-1 overflow-hidden ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="absolute -right-6 -top-10 text-[10rem] font-black text-gray-50/80 group-hover:text-blue-50/60 group-hover:scale-110 transition-all duration-1000 ease-out select-none pointer-events-none z-0">
              1
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 text-blue-600 font-bold mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-700 shadow-sm">
                01
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Planning Day
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                You reach out, and we reply within{" "}
                <span className="text-gray-700 font-semibold">24 hours</span>.
                We get on a call to hear your idea, and we agree on exactly what
                to build — together.
              </p>
            </div>
          </div>

          {/* Step 2 Card */}
          <div
            className={`relative group bg-white rounded-4xl p-8 sm:p-10 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-1000 delay-300 ease-[0.34,1.1,0.64,1] hover:-translate-y-1 overflow-hidden ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="absolute -right-6 -top-10 text-[10rem] font-black text-gray-50/80 group-hover:text-blue-50/60 group-hover:scale-110 transition-all duration-1000 ease-out select-none pointer-events-none z-0">
              2
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 text-blue-600 font-bold mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-700 shadow-sm">
                02
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                10-Day Build
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                We start the very next day. You get a real, working product
                ready to launch in{" "}
                <span className="text-gray-700 font-semibold">
                  exactly 10 days
                </span>
                .
              </p>
            </div>
          </div>

          {/* Step 3 Card */}
          <div
            className={`relative group bg-white rounded-4xl p-8 sm:p-10 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-1000 delay-450 ease-[0.34,1.1,0.64,1] hover:-translate-y-1 overflow-hidden ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="absolute -right-6 -top-10 text-[10rem] font-black text-gray-50/80 group-hover:text-blue-50/60 group-hover:scale-110 transition-all duration-1000 ease-out select-none pointer-events-none z-0">
              3
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 text-blue-600 font-bold mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-700 shadow-sm">
                03
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Go Live</h3>
              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                Your product goes live to real users. Need more features later?
                We can add them —{" "}
                <span className="text-gray-700 font-semibold">
                  no rush, no pressure
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
