import Button from "./Button";
import { AlertIcon } from "./Icons";

export default function ErrorMessage({
  title = "Something went wrong",
  message,
  onRetry,
}) {
  return (
    <div
      role="alert"
      className="flex items-start gap-3 rounded-xl border border-danger/40 p-4 text-danger animate-fade-in"
    >
      <AlertIcon className="mt-0.5 shrink-0" />
      <div className="min-w-0 flex-1">
        <p className="font-semibold">{title}</p>
        {message && <p className="mt-1 text-sm">{message}</p>}
        {onRetry && (
          <Button
            variant="secondary"
            size="sm"
            className="mt-3"
            onClick={onRetry}
          >
            Try Again
          </Button>
        )}
      </div>
    </div>
  );
}