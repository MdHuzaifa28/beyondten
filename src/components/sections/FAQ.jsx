import {
  useState,
  useEffect,
  useRef
} from "react";
import {
  ChevronDown,
  Mail
} from "lucide-react";
import Button from "../Button";

export default function FAQ() {
  const faqs = [
    {
      q: "When will I hear back after I contact you?",
      a: "We guarantee a reply within 24 hours. We know you want to move fast, so we don't keep you waiting.",
    },
    {
      q: "What exactly do I get in 10 days?",
      a: "A working app or website with your core features (MVP). It acts as your launchpad, ready to go live immediately.",
    },
    {
      q: "Does the 10-day clock include our first call?",
      a: "No. After you reach out, we reply within 24 hours to set up a 'Planning Day' call. The 10-day build starts the morning after that call.",
    },
    {
      q: "Can I add more features later?",
      a: "Yes. Our top priority is getting your product launched fast. Once it is live on Day 10, we can add complex features at a normal pace.",
    },
    {
      q: "Who actually builds my product?",
      a: "Just the two of us—one web expert and one app expert. You talk directly to the people doing the work. No middlemen.",
    },
    {
      q: "Will I see progress during the 10 days?",
      a: "Yes. We stay in touch and share updates regularly. You are never left in the dark.",
    },
  ];

  // State for the Accordion
  const [openIndex, setOpenIndex] = useState(null);

  // State and Ref for the Entrance Animation
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
      { rootMargin: "-10% 0px -10% 0px" }, // Trigger just before entering the center
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // 2. NAV-LINK / REFRESH DETECTION (The "Reset-Then-Play" trick)
    const handleHashChange = () => {
      // Even if FAQ isn't in the top nav right now, this makes the section future-proof
      // in case you link directly to beyondten.in/#faq
      if (window.location.hash === "#faq") {
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

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
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
            Questions? Here are the answers.
          </h2>
          <p className="text-lg text-gray-500 font-medium">
            Everything you need to know about our 10-day process.
          </p>
        </div>

        <div className="flex flex-col gap-4 mb-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              // Entrance Animation Wrapper (Isolates the entrance physics from the hover/open physics)
              <div
                key={index}
                className={`transition-all duration-1000 ease-[0.34,1.1,0.64,1] ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                // Dynamic staggered delay based on the index (100ms apart)
                style={{
                  transitionDelay: isVisible ? `${index * 100 + 150}ms` : "0ms",
                }}
              >
                {/* Interactive Question Button / Accordion Logic */}
                <div
                  className={`group border border-gray-100 rounded-4xl transition-all duration-700 ease-[0.34,1.1,0.64,1] overflow-hidden ${
                    isOpen
                      ? "bg-gray-50/50 shadow-md border-gray-200"
                      : "bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)]"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none"
                  >
                    <h3
                      className={`text-lg sm:text-xl font-bold transition-colors duration-500 pr-6 ${
                        isOpen
                          ? "text-gray-900"
                          : "text-gray-700 group-hover:text-gray-900"
                      }`}
                    >
                      {faq.q}
                    </h3>

                    {/* Smooth Rotating Chevron Icon */}
                    <div
                      className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-700 ease-[0.34,1.1,0.64,1] ${
                        isOpen
                          ? "bg-gray-900 text-white rotate-180"
                          : "bg-gray-100 text-gray-400 group-hover:bg-gray-200 group-hover:text-gray-600"
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" strokeWidth={2.5} />
                    </div>
                  </button>

                  {/* Animated Answer Body */}
                  <div
                    className={`grid transition-all duration-700 ease-[0.34,1.1,0.64,1] ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                        <p className="text-gray-500 text-lg leading-relaxed font-medium">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* More Questions Box (Fades in last) */}
        <div
          className={`relative overflow-hidden bg-gray-50 p-8 rounded-4xl border border-gray-100 text-center shadow-sm transition-all duration-1000 ease-[0.34,1.1,0.64,1] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionDelay: isVisible ? `${faqs.length * 100 + 200}ms` : "0ms",
          }}
        >
          <h4 className="text-xl font-bold text-gray-900 mb-2">
            More Questions? No Problem.
          </h4>
          <p className="text-gray-500 font-medium mb-6">
            Feel free to reach out to us directly.
          </p>
          <Button
            href="mailto:team@beyondten.in"
            variant="secondary"
            className="px-6 py-3 text-base"
          >
            <Mail className="w-4 h-4 text-gray-500 group-hover:text-gray-900 transition-colors" />
            team@beyondten.in
          </Button>
        </div>
      </div>
    </section>
  );
}
