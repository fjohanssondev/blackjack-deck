import type { SVGProps } from "react";

export function Diamonds(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 14 14"
      width="24"
      height="24"
      {...props}
    >
      <path d="M2.09221 6.39836 6.12892 0.933464c0.42691 -0.577952 1.31518 -0.577952 1.74209 0L11.9077 6.39836c0.2659 0.3599 0.2659 0.84338 0 1.20328L7.87101 13.0665c-0.42691 0.578 -1.31518 0.578 -1.74209 0L2.09221 7.60164c-0.26585 -0.3599 -0.26585 -0.84338 0 -1.20328Z" />
    </svg>
  );
}
