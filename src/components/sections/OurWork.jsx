import {
  useState,
  useEffect,
  useRef
} from "react";

// --- Project Data ---
const webProjects = [
  {
    id: "web-1",
    title: "LibraOS",
    tag: "On Going",
    description:
      "An all-in-one SaaS dashboard built for library owners to track seats, collect fees, and send alerts.",
    imageText: "[ libraos.com ]",
    image: "/LibraOS.png",
    link: "https://libra-os-landing.vercel.app/",
  },
  /*
  {
    id: "web-2",
    title: "dotnovexure",
    tag: "Featured",
    description:
      "A sharp, professional website built to capture leads from the moment it went live.",
    imageText: "[ dotnovexure.com ]",
  },
  {
    id: "web-3",
    title: "Nexus Dashboard",
    tag: "Active",
    description:
      "A clean internal tool MVP helping teams track metrics without the clutter.",
    imageText: "[ nexus-dash.app ]",
  },
  */
];

/*
const appProjects = [
  {
    id: "app-1",
    title: "Local Booking App",
    tag: "Featured",
    description: "A clean app that lets users find and book services right from their phone. Simple. Fast.",
    imageText: "[ Booking App ]",
  },
  {
    id: "app-2",
    title: "FitTrack MVP",
    tag: "Creative",
    description: "A gorgeous, stripped-down fitness tracker to get real user feedback on core features.",
    imageText: "[ FitTrack App ]",
  },
  {
    id: "app-3",
    title: "Campus Connect",
    tag: "Recent",
    description: "A social MVP connecting university students for instant event coordination.",
    imageText: "[ Campus Connect ]",
  },
];
*/

const getTagStyle = (tag) => {
  const normalizedTag = tag.toLowerCase();
  if (normalizedTag === "featured") return "bg-amber-50 text-amber-700 border-amber-200";
  if (normalizedTag === "active" || normalizedTag === "on going") return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (normalizedTag === "recent") return "bg-cyan-50 text-cyan-700 border-cyan-200";
  if (normalizedTag === "creative") return "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200";
  
  // Default fallback
  return "bg-gray-50 text-gray-700 border-gray-200";
};

export default function OurWork() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // State to track the currently active project index
  const [activeWebIndex, setActiveWebIndex] = useState(0);
  // const [activeAppIndex, setActiveAppIndex] = useState(0);

  // Set up the automated rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWebIndex((prev) => (prev + 1) % webProjects.length);
      // setActiveAppIndex((prev) => (prev + 1) % appProjects.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // SCROLL DETECTION
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

    // NAV-LINK / REFRESH DETECTION (The "Reset-Then-Play" trick)
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
          {/* Rotating Web Project (Cross-fade container) */}
          <div
            className={`relative w-full bg-white rounded-4xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-1000 delay-150 ease-[0.34,1.1,0.64,1] hover:-translate-y-1 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* The Sliding Track */}
            <div
              className="flex transition-transform duration-1500 ease-[0.34,1.1,0.64,1]"
              style={{ transform: `translateX(-${activeWebIndex * 100}%)` }}
            >
              {webProjects.map((project) => {
                return (
                  <a
                    key={project.id}
                    href={project.link || "#"}
                    target={project.link ? "_blank" : undefined}
                    rel={project.link ? "noopener noreferrer" : undefined}
                    className="w-full shrink-0 flex flex-col group cursor-pointer"
                  >
                    {/* Image / Placeholder Area */}
                    <div className="relative h-60 w-full shrink-0 bg-gray-50 flex items-center justify-center overflow-hidden border-b border-gray-100">
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] z-20 pointer-events-none" />

                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top transition-transform duration-[1.5s] ease-[0.34,1.1,0.64,1] group-hover:scale-105 z-10"
                        />
                      ) : (
                        <div className="relative z-10 text-sm font-semibold tracking-widest text-gray-400 uppercase">
                          {project.imageText}
                        </div>
                      )}
                    </div>

                    <div className="p-8 grow flex flex-col justify-center bg-white">
                      {/* Category Pills */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-xs font-bold text-blue-600 tracking-wide uppercase">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                          Web App
                        </div>
                        <div
                          className={`inline-flex items-center px-2 py-1 rounded-md border text-[10px] font-extrabold tracking-wider uppercase shadow-sm ${getTagStyle(project.tag)}`}
                        >
                          {project.tag}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold mb-2 text-gray-900 transition-colors duration-500 group-hover:text-blue-600 flex items-center gap-2">
                        {project.title}
                        {project.link && (
                          <span className="opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                            ↗
                          </span>
                        )}
                      </h3>
                      <p className="text-gray-500 text-lg leading-relaxed font-medium line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Rotating Mobile App Project (Sliding Carousel) */}
          {/*
          <div
            className={`relative w-full bg-white rounded-4xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-1000 delay-300 ease-[0.34,1.1,0.64,1] hover:-translate-y-1 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div
              className="flex transition-transform duration-1500 ease-[0.34,1.1,0.64,1]"
              style={{ transform: `translateX(-${activeAppIndex * 100}%)` }}
            >
              {appProjects.map((project) => {
                return (
                  <a
                    key={project.id}
                    href={project.link || "#"}
                    target={project.link ? "_blank" : undefined}
                    rel={project.link ? "noopener noreferrer" : undefined}
                    className="w-full shrink-0 flex flex-col group cursor-pointer"
                  >
                    <div className="relative h-60 w-full shrink-0 bg-gray-50 flex items-center justify-center overflow-hidden border-b border-gray-100">
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] z-20 pointer-events-none" />

                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top transition-transform duration-[1.5s] ease-[0.34,1.1,0.64,1] group-hover:scale-105 z-10"
                        />
                      ) : (
                        <div className="relative z-10 text-sm font-semibold tracking-widest text-gray-400 uppercase">
                          {project.imageText}
                        </div>
                      )}
                    </div>

                    <div className="p-8 grow flex flex-col justify-center bg-white">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-xs font-bold text-purple-600 tracking-wide uppercase">
                          <span className="h-1.5 w-1.5 rounded-full bg-purple-600"></span>
                          Mobile App
                        </div>
                        <div className="inline-flex items-center px-2 py-1 rounded border border-gray-200 text-[10px] font-bold text-gray-400 tracking-wider uppercase">
                          {project.tag}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold mb-2 text-gray-900 transition-colors duration-500 group-hover:text-purple-600 flex items-center gap-2">
                        {project.title}
                        {project.link && (
                          <span className="opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                            ↗
                          </span>
                        )}
                      </h3>
                      <p className="text-gray-500 text-lg leading-relaxed font-medium line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
}
