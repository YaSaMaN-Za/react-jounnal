import { useState } from "react";

export default function CoverImage({ src, alt = "", className = "" }) {
  const [failedSrc, setFailedSrc] = useState(null);
  const hasFailed = !src || failedSrc === src;

  return (
    <div
      className={`relative aspect-video overflow-hidden bg-surface-muted ${className}`}
    >
      {hasFailed ? (
        <div
          className="absolute inset-0 bg-gradient-to-br from-brand/30 via-surface-muted to-accent/20"
          role={alt ? "img" : undefined}
          aria-label={alt || undefined}
        />
      ) : (
        <img
          src={src}
          alt={alt}
          width="1200"
          height="675"
          loading="lazy"
          decoding="async"
          onError={() => setFailedSrc(src)}
          className="size-full object-cover dark:brightness-90"
        />
      )}
    </div>
  );
}