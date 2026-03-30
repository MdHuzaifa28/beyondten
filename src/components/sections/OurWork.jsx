import {
  useState,
  useEffect,
  useRef
} from "react";
import { ArrowUpRight } from "lucide-react";

// --- Live Projects Data ---
const liveProjects = [
  {
    id: "libra-os",
    title: "LibraOS",
    category: "Web App",
    description:
      "An all-in-one SaaS dashboard for library owners — seat tracking, fee collection, and automated alerts.",
    image: "/LibraOS.png", // Your uploaded screenshot
    link: "https://libra-os-landing.vercel.app/",
    accentColor: "blue",
  },
  {
    id: "dotnovexure",
    title: "dotnovexure",
    category: "Website",
    description:
      "A sharp, professional website built to capture leads from the moment it went live.",
    image: "/dotnovexure.png", // Shows the premium typographic placeholder
    link: "https://dotnovexure.vercel.app/",
    accentColor: "violet",
  },
];

// --- Premium Accent Styling Map ---
const accentMap = {
  blue: {
    pill: "bg-blue-50 text-blue-600",
    dot: "bg-blue-600",
    hover: "group-hover:text-blue-600",
    glow: "hover:shadow-[0_12px_40px_-4px_rgba(59,130,246,0.12)]",
    placeholder: "from-blue-50 to-slate-50",
    placeholderText: "text-blue-300",
  },
  violet: {
    pill: "bg-violet-50 text-violet-600",
    dot: "bg-violet-600",
    hover: "group-hover:text-violet-600",
    glow: "hover:shadow-[0_12px_40px_-4px_rgba(139,92,246,0.12)]",
    placeholder: "from-violet-50 to-slate-50",
    placeholderText: "text-violet-300",
  },
};

export default function OurWork() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Smooth scroll animations
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
        {/* Section Header */}
        <div
          className={`mb-10 transition-all duration-1000 ease-[0.34,1.1,0.64,1] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              Currently live
            </h2>
            {/* Slot counter */}
            <div className="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200">
              <span className="text-xs font-bold text-amber-700 tracking-wide">
                1 slot left
              </span>
            </div>
          </div>
          <p className="text-gray-500 font-medium text-base">
            We take{" "}
            <span className="font-semibold text-gray-700">
              3 projects at a time
            </span>
            . 2 are live and in progress — only 1 opening remains.
          </p>
        </div>

        {/* Vertical Project Cards */}
        <div className="flex flex-col gap-6">
          {liveProjects.map((project, index) => {
            const accent = accentMap[project.accentColor];
            const CardWrapper = project.link ? "a" : "div";
            const linkProps = project.link
              ? {
                  href: project.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <CardWrapper
                key={project.id}
                {...linkProps}
                className={`group relative bg-white rounded-4xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] ${accent.glow} transition-all duration-1000 ease-[0.34,1.1,0.64,1] hover:-translate-y-1 overflow-hidden cursor-pointer ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 150 + 100}ms` : "0ms",
                }}
              >
                {/* Image area */}
                <div
                  className={`relative h-52 w-full bg-linear-to-br ${accent.placeholder} flex items-center justify-center overflow-hidden border-b border-gray-100`}
                >
                  {/* Shimmer on hover */}
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] z-20 pointer-events-none" />

                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      // Smooth hover zoom
                      className="w-full h-full object-cover object-top transition-transform duration-[1.5s] ease-[0.34,1.1,0.64,1] group-hover:scale-105"
                    />
                  ) : (
                    // Typographic placeholder if no image exists
                    <span
                      className={`text-sm font-bold tracking-[0.2em] uppercase ${accent.placeholderText}`}
                    >
                      {project.title}
                    </span>
                  )}
                </div>

                {/* Card body */}
                <div className="p-7">
                  {/* Pills row */}
                  <div className="flex items-center gap-2 mb-4">
                    {/* Category Pill */}
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${accent.pill}`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${accent.dot}`}
                      />
                      {project.category}
                    </span>

                    {/* Ongoing live pill */}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700 tracking-wide">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 duration-1000"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                      </span>
                      Ongoing
                    </span>
                  </div>

                  {/* Title + arrow */}
                  <h3
                    className={`text-2xl font-bold text-gray-900 mb-2 transition-colors duration-500 flex items-center gap-2 ${accent.hover}`}
                  >
                    {project.title}
                    {project.link && (
                      <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-1 -translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-[0.34,1.1,0.64,1]" />
                    )}
                  </h3>

                  <p className="text-gray-500 text-base leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>
              </CardWrapper>
            );
          })}
        </div>

        {/* 1 slot left CTA nudge */}
        <div
          className={`mt-8 flex items-start gap-4 p-5 rounded-4xl bg-amber-50 border border-amber-200 transition-all duration-1000 ease-[0.34,1.1,0.64,1] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isVisible ? "450ms" : "0ms" }}
        >
          <div className="shrink-0 mt-0.5">
            {/* Visual slot representation */}
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm" />
              <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm" />
              <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300" />
            </div>
          </div>
          <div>
            <p className="text-sm font-bold text-amber-900 mb-0.5">
              2 of 3 project slots are taken.
            </p>
            <p className="text-sm text-amber-700 font-medium">
              The last slot fills fast. Reach out today to secure yours before
              we close intake.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
