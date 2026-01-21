// components/brand/MelivanLogoMark.tsx
import * as React from "react";

type Props = React.SVGProps<SVGSVGElement> & {
  className?: string;
};

export function MelivanLogoMark({ className = "", ...props }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {/* Fond arrondi */}
      <rect
        x="2.5"
        y="2.5"
        width="19"
        height="19"
        rx="6"
        ry="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      {/* M stylisé */}
      <path
        d="M7.5 16.5L7.5 8.5L10.2 13.2L12 9.5L13.8 13.2L16.5 8.5L16.5 16.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}