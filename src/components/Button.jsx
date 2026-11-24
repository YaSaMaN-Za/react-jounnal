import { buttonStyles } from "./buttonStyles";

export default function Button({
  variant,
  size,
  className,
  type = "button",
  children,
  ...buttonProps
}) {
  return (
    <button
      type={type}
      className={buttonStyles({ variant, size, className })}
      {...buttonProps}
    >
      {children}
    </button>
  );
}