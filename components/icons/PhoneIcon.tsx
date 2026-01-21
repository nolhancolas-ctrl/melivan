// components/icons/PhoneIcon.tsx
import * as React from "react";

export function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M7.2 3.5c-.3 0-.7.1-.9.4L4.4 5.9c-.4.5-.5 1.2-.4 1.8.8 3.8 3.6 7 7.4 8.8.6.3 1.3.1 1.8-.3l1.7-1.7c.4-.4.4-.9.1-1.3l-1.3-1.9c-.3-.4-.8-.5-1.2-.3l-1.2.5c-1.1-.6-2-1.5-2.7-2.6l.5-1.2c.2-.4.1-.9-.3-1.2L7.6 3.8c-.2-.2-.4-.3-.6-.3z"
        fill="currentColor"
      />
    </svg>
  );
}