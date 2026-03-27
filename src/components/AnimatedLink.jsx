export default function AnimatedLink({
  href,
  children,
  isActive = false,
  className = "",
}) {
  // -- Styling Logic --
  const baseStyles =
    "relative group inline-block transition-all duration-500 ease-[0.34,1.1,0.64,1] will-change-transform";
  const hoverStyles = "hover:text-gray-900 hover:scale-[1.02]";

  const activeStyles = isActive ? "text-gray-900" : "text-gray-500";

  return (
    <a
      href={href}
      className={`${baseStyles} ${hoverStyles} ${activeStyles} ${className}`}
    >
      <span className="relative inline-block">
        {children}

        {/* -- Underline Animation -- */}
        <span className="absolute -bottom-1 left-0 h-0.5 bg-gray-900 transition-all ease-[0.34,1.1,0.64,1] duration-500 w-0 group-hover:w-full group-hover:duration-700" />
      </span>
    </a>
  );
}
