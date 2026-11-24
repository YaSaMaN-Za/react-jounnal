export default function EmptyState({
  icon,
  title,
  description,
  headingLevel = 2,
  children,
}) {
  const Heading = `h${headingLevel}`;

  return (
    <div className="flex flex-col items-center rounded-xl border border-dashed border-line-strong bg-surface px-6 py-14 text-center animate-fade-in">
      {icon && (
        <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-brand-soft text-brand">
          {icon}
        </div>
      )}
      <Heading className="text-xl font-semibold text-ink">{title}</Heading>
      {description && (
        <p className="mt-2 max-w-md text-ink-muted">{description}</p>
      )}
      {children && (
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {children}
        </div>
      )}
    </div>
  );
}