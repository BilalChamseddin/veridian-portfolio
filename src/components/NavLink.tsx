import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(
            // base
            "px-3 py-2 rounded-md text-sm font-medium transition-colors",
            // idle
            "text-foreground/80 hover:text-primary hover:bg-primary/15",
            // active (PURPLE)
            isActive && "text-primary bg-primary/20",
            // pending
            isPending && "opacity-70",
            className,
            isActive && activeClassName,
            isPending && pendingClassName,
          )
        }
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };
