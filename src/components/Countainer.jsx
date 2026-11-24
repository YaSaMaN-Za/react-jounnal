const widths = {
  default: "max-w-6xl",
  narrow: "max-w-3xl",
  reading: "max-w-[44rem]",
};

export default function Container({
  size = "default",
  className = "",
  children,
}) {
  return (
    <div
      className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${widths[size]} ${className}`}
    >
      {children}
    </div>
  );
}