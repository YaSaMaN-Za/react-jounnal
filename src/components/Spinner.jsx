export default function Spinner({ label = "loading...", className = "" }) {
    return (
        <output
            className={`inline-flex items-center gap-2 text-ink-muted ${className}`}
        >
            <svg
                className="size-5 animate-spin text-brand"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
            >
                <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="3"
                    opacity="0.25"
                />
                <path
                    d="M21 12a9 9 0 0 0-9-9"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
            </svg>
            <span className="text-sm">{label}</span>
        </output>
    );
}