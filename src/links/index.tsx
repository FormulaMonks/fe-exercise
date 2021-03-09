import { AnchorHTMLAttributes } from "react";
import { NavLink } from "react-router-dom";

export function Link(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { href } = props;
  if (href === "/" || href?.match(/^\/[^/]/))
    return <NavLink {...props} to={href} />;
  return <a {...props} />;
}
