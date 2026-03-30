import {
  useState,
  useEffect,
  useRef
} from "react";
import {
  ChevronDown,
  Package
} from "lucide-react";

const timeline = [
  {
    day: "Day 1",
    label: "Design System & Brand Guidelines",
    desc: "Colors, typography, components — your visual identity locked in.",
    deliverable: true,
  },
  {
    day: "Day 2",
    label: "Live Landing Page",
    desc: "A real, public-facing landing page goes live. It evolves with the project.",
    deliverable: true,
  },
  {
    day: "Day 3",
    label: "Sitemap",
    desc: "Every page and flow mapped out. No surprises later.",
    deliverable: true,
  },
  {
    day: "Day 4",
    label: "Database Setup",
    desc: "Schema designed and deployed. Your data architecture, done right.",
    deliverable: false,
  },
  {
    day: "Days 5–6",
    label: "Backend",
    desc: "APIs, auth, business logic — the engine under the hood.",
    deliverable: false,
  },
  {
    day: "Days 7–9",
    label: "Frontend",
    desc: "All screens built and wired to the backend. Pixel-perfect.",
    deliverable: false,
  },
  {
    day: "Day 10",
    label: "Go Live",
    desc: "Your product ships to real users. Done.",
    deliverable: true,
    isLast: true,
  },
];

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef(null);
  const step2CardRef = useRef(null);

  const collapseAndScrollToCard = () => {
    setIsExpanded(false);
    setTimeout(() => {
      step2CardRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-10% 0px -10% 0px" },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleHashChange = () => {
      if (window.location.hash === "#how-it-works") {
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
      id="how-it-works"
      ref={sectionRef}
      className="relative scroll-mt-10 px-6 py-24 bg-gray-50/50 text-gray-900 overflow-hidden"
    >
      <div className="max-w-lg mx-auto w-full relative z-10">
        {/* Section Header */}
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

          {/* Step 2 Card — Expandable */}
          <div
            ref={step2CardRef}
            className={`relative bg-white rounded-4xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] transition-all duration-1000 delay-300 ease-[0.34,1.1,0.64,1] overflow-hidden ${
              isExpanded
                ? "shadow-[0_12px_40px_-4px_rgba(59,130,246,0.10)]"
                : "hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-1"
            } ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="absolute -right-6 -top-10 text-[10rem] font-black text-gray-50/80 select-none pointer-events-none z-0">
              2
            </div>

            {/* Card Header — always visible */}
            <div className="relative z-10 p-8 sm:p-10">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 text-blue-600 font-bold mb-6 shadow-sm">
                02
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                10-Day Build
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed font-medium mb-6">
                We start the very next day. You get a real, working product
                ready to launch in{" "}
                <span className="text-gray-700 font-semibold">
                  exactly 10 days
                </span>
                .
              </p>

              {/* Expand toggle */}
              <button
                onClick={() => setIsExpanded((v) => !v)}
                className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-300"
              >
                <span>
                  {isExpanded ? "Hide the plan" : "See the 10-day plan"}
                </span>
                <div
                  className={`flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 transition-all duration-500 ease-[0.34,1.1,0.64,1] group-hover/btn:bg-blue-100 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown className="w-3.5 h-3.5" strokeWidth={2.5} />
                </div>
              </button>
            </div>

            {/* Expandable content */}
            <div
              className={`grid transition-all duration-700 ease-[0.34,1.1,0.64,1] ${
                isExpanded
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-8 sm:px-10 pb-8 sm:pb-10 pt-0">
                  {/* Divider */}
                  <div className="h-px w-full bg-gray-100 mb-8" />

                  {/* Timeline */}
                  <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-4.75 top-2 bottom-2 w-px bg-gray-100" />

                    <div className="flex flex-col gap-0">
                      {timeline.map((item, i) => (
                        <div
                          key={i}
                          className="relative flex gap-5 pb-7 last:pb-0"
                        >
                          {/* Dot */}
                          <div className="relative z-10 shrink-0">
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center text-[11px] font-bold shadow-sm border transition-all duration-500 ${
                                item.isLast
                                  ? "bg-gray-900 text-white border-gray-900"
                                  : item.deliverable
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "bg-white text-gray-500 border-gray-200"
                              }`}
                            >
                              {i + 1}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="pt-1.5 flex-1">
                            <div className="flex items-center gap-2 flex-wrap mb-0.5">
                              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                                {item.day}
                              </span>
                              {item.deliverable && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-50 text-[10px] font-bold text-blue-600 tracking-wide">
                                  <Package className="w-2.5 h-2.5" />
                                  Deliverable
                                </span>
                              )}
                            </div>
                            <p className="text-sm font-bold text-gray-900 mb-0.5">
                              {item.label}
                            </p>
                            <p className="text-sm text-gray-400 font-medium leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables summary */}
                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                      What you receive
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        {
                          day: "Day 1",
                          item: "Design System + Brand Guidelines",
                        },
                        { day: "Day 2", item: "Landing Page" },
                        { day: "Day 3", item: "Sitemap" },
                        { day: "Day 10", item: "Complete Website" },
                      ].map((d, i) => (
                        <div
                          key={i}
                          className="bg-gray-50 rounded-2xl p-4 border border-gray-100"
                        >
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1">
                            {d.day}
                          </div>
                          <div className="text-sm font-semibold text-gray-800 leading-snug">
                            {d.item}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Show less button */}
                  <button
                    onClick={collapseAndScrollToCard}
                    className="group/btn mt-8 w-full inline-flex items-center justify-center gap-2 text-sm font-semibold text-gray-400 hover:text-blue-600 transition-colors duration-300"
                  >
                    <div
                      className={`flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 transition-all duration-500 ease-[0.34,1.1,0.64,1] group-hover/btn:bg-blue-50 group-hover/btn:text-blue-600 rotate-180`}
                    >
                      <ChevronDown className="w-3.5 h-3.5" strokeWidth={2.5} />
                    </div>
                    <span>Show less</span>
                  </button>
                </div>
              </div>
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
