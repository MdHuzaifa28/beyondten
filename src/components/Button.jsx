export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const baseStyles =
    "relative group inline-flex items-center justify-center gap-2 font-semibold rounded-full active:scale-[0.98] transition-all duration-500 ease-[0.34,1.1,0.64,1] overflow-hidden cursor-pointer";

  const variants = {
    primary:
      "bg-gray-900 text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.16)] hover:scale-[1.01]",
    secondary:
      "bg-white border border-gray-200 text-gray-900 shadow-sm hover:border-gray-300 hover:bg-gray-50",
    accent:
      "bg-blue-600 text-white shadow-[0_4px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 border border-blue-500",
  };

  const hasShimmer = variant === "primary" || variant === "accent";
  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2 w-full">
        {children}
      </span>
      {hasShimmer && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/20 to-transparent z-0" />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClassName} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {content}
    </button>
  );
}
