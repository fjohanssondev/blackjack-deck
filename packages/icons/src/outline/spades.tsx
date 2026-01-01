import type { SVGProps } from "react";

export function Spades(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 14"
      width="24"
      height="24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        d="M1.49139 4.95004 5.73862 0.9971c0.71214 -0.6628 1.81508 -0.6628 2.52723 0l4.24725 3.95294c2.5321 2.37862 -0.1625 7.34196 -4.07175 5.26236L9.10773 13.5h-4.2155l0.66561 -3.2838c-3.9134 2.0809 -6.60522 -2.8812 -4.06645 -5.26616Z"
      />
    </svg>
  );
}
