import {
  useState,
  useEffect,
  useRef
} from "react";
import { Star } from "lucide-react";

export default function ClientReviews() {
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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="relative px-6 py-24 bg-gray-50/50 text-gray-900 overflow-hidden"
    >
      <div className="max-w-lg mx-auto w-full relative z-10">
        {/* Section Header (Fades in first) */}
        <div
          className={`text-center mb-14 transition-all duration-1000 ease-[0.34,1.1,0.64,1] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
            People who launched with us.
          </h2>
          <p className="text-lg text-gray-500 font-medium">
            Don't just take our word for it.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {/* Review 1 (Fades in second) */}
          <div
            className={`relative group bg-white rounded-[2.5rem] p-8 sm:p-10 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_-4px_rgba(59,130,246,0.08)] hover:-translate-y-1 transition-all duration-1000 delay-150 ease-[0.34,1.1,0.64,1] overflow-hidden ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Massive Soft Quote Watermark */}
            <div className="absolute top-2 right-6 text-[10rem] leading-none font-serif text-gray-100 group-hover:text-blue-50/60 group-hover:scale-110 transition-all duration-1000 ease-out select-none pointer-events-none z-0">
              &quot;
            </div>

            <div className="relative z-10">
              {/* Soft Gold Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400 drop-shadow-sm"
                  />
                ))}
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-snug">
                Fast and exactly what we needed.
              </h4>
              <p className="text-gray-500 text-lg leading-relaxed font-medium mb-8">
                "We needed a website for our university fest, FLAYER'25. They
                delivered a fully working site — no delays, no tech headaches."
              </p>

              {/* Author Block */}
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-br from-blue-100 to-blue-50 text-blue-600 font-bold text-lg shadow-sm">
                  E
                </div>
                <div>
                  <div className="font-bold text-gray-900">Event Organizer</div>
                  <div className="text-sm font-medium text-gray-400">
                    FLAYER'25
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Review 2 (Fades in third) */}
          <div
            className={`relative group bg-white rounded-[2.5rem] p-8 sm:p-10 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_-4px_rgba(168,85,247,0.08)] hover:-translate-y-1 transition-all duration-1000 delay-300 ease-[0.34,1.1,0.64,1] overflow-hidden ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Massive Soft Quote Watermark */}
            <div className="absolute top-2 right-6 text-[10rem] leading-none font-serif text-gray-50 group-hover:text-purple-50/60 group-hover:scale-110 transition-all duration-1000 ease-out select-none pointer-events-none z-0">
              "
            </div>

            <div className="relative z-10">
              {/* Soft Gold Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400 drop-shadow-sm"
                  />
                ))}
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-snug">
                The easiest way to launch your idea.
              </h4>
              <p className="text-gray-500 text-lg leading-relaxed font-medium mb-8">
                "I had an app idea and couldn't wait months. beyondten gave me a
                working product in 10 days. I showed it to my first users the
                same week."
              </p>

              {/* Author Block */}
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-br from-purple-100 to-purple-50 text-purple-600 font-bold text-lg shadow-sm">
                  S
                </div>
                <div>
                  <div className="font-bold text-gray-900">Startup Founder</div>
                  <div className="text-sm font-medium text-gray-400">
                    Tech Entrepreneur
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
