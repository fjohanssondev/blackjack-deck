import type { SVGProps } from "react";

export function Hearts(props: SVGProps<SVGSVGElement>) {
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
        d="M8.26586 11.9075c-0.71214 0.7055 -1.81509 0.7055 -2.52723 0L1.49139 7.69955c-2.84133 -2.84138 0.86894 -9.11901 5.51085 -4.4771C11.636 -1.4113 15.3463 4.86643 12.5131 7.69955L8.26586 11.9075Z"
      />
    </svg>
  );
}
