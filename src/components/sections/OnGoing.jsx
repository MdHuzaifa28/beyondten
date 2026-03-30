import { useState, useEffect, useRef } from "react";
import { Calendar, Clock, AlertCircle } from "lucide-react";

// --- Ongoing Projects Configuration ---
// Add up to 3 projects here. If you have fewer than 3, the remaining slots will show as "Available".
const currentProjects = [
  {
    id: 1,
    title: "SaaS Dashboard",
    type: "Web App",
    startDate: "Oct 12",
    endDate: "Oct 22",
  },
  {
    id: 2,
    title: "E-Commerce Mobile App",
    type: "Mobile App",
    startDate: "Oct 14",
    endDate: "Oct 24",
  },
  {
    id: 3,
    title: "Internal Tool MVP",
    type: "Web App",
    startDate: "Oct 15",
    endDate: "Oct 25",
  },
];

// Update this date to tell clients when you can take the next project
const nextAvailableDate = "October 26th";

export default function OnGoing() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

    return () => observer.disconnect();
  }, []);

  const isFull = currentProjects.length >= 3;

  return (
    <section
      id="ongoing"
      ref={sectionRef}
      className="relative scroll-mt-10 px-6 py-24 bg-gray-50/50 text-gray-900 overflow-hidden"
    >
      <div className="max-w-lg mx-auto w-full relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ease-[0.34,1.1,0.64,1] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-blue-100/50 text-xs font-bold text-blue-700 tracking-wide uppercase border border-blue-200/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 duration-1000"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Live Tracker
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
            Current Sprint
          </h2>
          <p className="text-lg text-gray-500 font-medium">
            To ensure premium quality, we take a strict maximum of{" "}
            <span className="text-gray-900 font-bold">3 projects</span> per
            10-day slot.
          </p>
        </div>

        {/* Project Slots Container */}
        <div className="flex flex-col gap-4 mb-10">
          {[1, 2, 3].map((slot, index) => {
            const project = currentProjects[index];
            const delayClass =
              index === 0
                ? "delay-150"
                : index === 1
                  ? "delay-300"
                  : "delay-[450ms]";

            return (
              <div
                key={slot}
                className={`relative bg-white rounded-3xl p-6 border transition-all duration-1000 ease-[0.34,1.1,0.64,1] ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                } ${delayClass} ${
                  project
                    ? "border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]"
                    : "border-dashed border-gray-200 bg-gray-50/50"
                }`}
              >
                {project ? (
                  // Filled Slot
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-gray-900 text-lg">
                        {project.title}
                      </h4>
                      <div className="inline-flex items-center px-2 py-1 rounded-md bg-emerald-50 text-[10px] font-extrabold tracking-wider uppercase text-emerald-700 border border-emerald-200">
                        In Progress
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-gray-400" />
                        {project.type}
                      </span>
                      <span className="flex items-center gap-1.5 text-gray-700">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        {project.startDate} — {project.endDate}
                      </span>
                    </div>
                  </div>
                ) : (
                  // Empty Slot
                  <div className="flex items-center justify-center h-18 text-gray-400 font-medium gap-2">
                    Slot {slot} Available
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Availability Banner */}
        <div
          className={`overflow-hidden rounded-4xl border text-center p-6 transition-all duration-1000 delay-600 ease-[0.34,1.1,0.64,1] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } ${
            isFull
              ? "bg-amber-50 border-amber-100 shadow-[0_4px_20px_-4px_rgba(251,191,36,0.15)]"
              : "bg-blue-50 border-blue-100 shadow-[0_4px_20px_-4px_rgba(59,130,246,0.1)]"
          }`}
        >
          {isFull ? (
            <div className="flex flex-col items-center gap-2">
              <AlertCircle
                className="w-8 h-8 text-amber-500 mb-1"
                strokeWidth={2}
              />
              <h4 className="text-xl font-bold text-amber-900">
                We are currently at capacity.
              </h4>
              <p className="text-amber-700/80 font-medium">
                We are not taking new projects right now. Our next available
                slot opens on{" "}
                <span className="font-bold text-amber-900">
                  {nextAvailableDate}
                </span>
                .
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-1">
                <span className="font-bold text-lg">✓</span>
              </div>
              <h4 className="text-xl font-bold text-blue-900">
                Slots are open!
              </h4>
              <p className="text-blue-700/80 font-medium">
                We have room for {3 - currentProjects.length} more project
                {3 - currentProjects.length > 1 ? "s" : ""} in our current
                sprint.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
