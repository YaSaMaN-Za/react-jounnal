const tones = {
  brand: "bg-brand-soft text-brand",
  neutral: "bg-surface-muted text-ink-muted border border-line",
};

export default function Badge({ tone = "brand", children }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-semibold tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  );
}