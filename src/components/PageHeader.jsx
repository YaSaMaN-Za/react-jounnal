export default function PageHeader({ eyebrow, title, description }) {
  return (
    <header className="mb-8 animate-fade-up">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">
          {eyebrow}
        </p>
      )}
      <h1 className="text-3xl font-semibold text-ink sm:text-4xl">{title}</h1>
      {description && (
        <p className="mt-3 max-w-2xl text-lg text-ink-muted">{description}</p>
      )}
    </header>
  );
}