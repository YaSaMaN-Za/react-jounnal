import { CheckCircleIcon, CloseIcon } from "./Icons";

export default function FlashMessage({ message, onDismiss }) {
  return (
    <div className="mb-6 flex items-center gap-3 rounded-xl border border-success/40 bg-success-soft p-4 text-success animate-fade-up">
      <CheckCircleIcon className="shrink-0" />
      <output className="flex-1 text-sm font-medium">{message}</output>
      <button
        type="button"
        onClick={onDismiss}
        aria-label="Dismiss message"
        className="rounded-md p-1 hover:bg-success/10"
      >
        <CloseIcon size={18} />
      </button>
    </div>
  );
}