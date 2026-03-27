import {
  useState,
  useEffect
} from "react";
import AnimatedLink from "./AnimatedLink";
import Button from "./Button";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  // Add a state to trigger the entrance animation
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setIsMounted(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);

            if (id && ["what-we-build", "work", "faq"].includes(id)) {
              window.history.replaceState(null, null, `#${id}`);
            } else {
              window.history.replaceState(
                null,
                null,
                window.location.pathname + window.location.search,
              );
            }
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" },
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-4 inset-x-4 mx-auto max-w-lg bg-white/80 backdrop-blur-lg z-50 rounded-full border border-gray-100 shadow-sm 
        transition-all duration-1000 ease-[0.34,1.1,0.64,1] 
        ${isMounted ? "translate-y-0 opacity-100 scale-100" : "-translate-y-8 opacity-0 scale-95"}
      `}
    >
      <div className="px-5 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <a
          href="#"
          className="text-xl font-black tracking-tighter text-gray-900"
        >
          beyondten<span className="text-blue-600">.</span>
        </a>

        {/* Center: Hidden on mobile, visible on larger screens if needed */}
        <div className="hidden sm:flex gap-6 text-sm font-medium">
          <AnimatedLink
            href="#what-we-build"
            isActive={activeSection === "what-we-build"}
          >
            Plans
          </AnimatedLink>
          <AnimatedLink href="#work" isActive={activeSection === "work"}>
            Work
          </AnimatedLink>
          <AnimatedLink href="#faq" isActive={activeSection === "faq"}>
            FAQ
          </AnimatedLink>
        </div>

        {/* Right: Quick Action CTA*/}
        <Button
          href="https://wa.me/917439680877?text=Hi%20beyondten!%20I'm%20interested%20in%20launching%20a%20project%20in%2010%20days.%20Let's%20book%20a%20call."
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          className="px-5 py-2 text-sm shadow-none"
        >
          Book Call
        </Button>
      </div>
    </nav>
  );
}
