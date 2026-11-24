import { Link } from "react-router";
import { buttonStyles } from "./buttonStyles";

export default function ButtonLink({
  variant,
  size,
  className,
  children,
  ...linkProps
}) {
  return (
    <Link className={buttonStyles({ variant, size, className })} {...linkProps}>
      {children}
    </Link>
  );
}