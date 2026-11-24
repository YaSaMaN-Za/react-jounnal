const base =
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium whitespace-nowrap cursor-pointer transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
    primary: "bg-brand text-on-brand hover:bg-brand-strong",
    secondary:
        "border border-line-strong bg-surface text-ink hover:bg-surface-muted",
    ghost: "text-ink-muted hover:bg-surface-muted hover:text-ink",
    danger: "bg-danger text-on-brand hover:opacity-90",
};

const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2.5 text-sm",
    lg: "px-5 py-3 text-base",
};

export function buttonStyles({
    variant = "primary",
    size = "md",
    className = "",
} = {}) {
    return `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();
}