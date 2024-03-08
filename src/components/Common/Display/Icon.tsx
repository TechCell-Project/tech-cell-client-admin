import React, { memo, SVGProps } from 'react';

type PropsSVG = SVGProps<SVGSVGElement>;

export const NotifyIcon = memo((props: PropsSVG) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112">
      <rect
        width="18.98"
        height="18.98"
        x="34.96"
        y="82"
        fill="#1876f2"
        rx="9.49"
        transform="rotate(-15 44.445 91.471)"
      />
      <circle cx="43.01" cy="26.27" r="6.85" fill="#7a7d81" />
      <path fill="#bcc0c4" d="M75.28 43.44a26.72 26.72 0 10-51.62 13.83L30 81l51.62-13.87z" />
      <path fill="#bcc0c4" d="M90.78 75.64L26.33 92.9l3.22-13.63 51.62-13.83 9.61 10.2z" />
      <rect
        width="66.91"
        height="8.88"
        x="25.35"
        y="80.75"
        fill="#bcc0c4"
        rx="4.44"
        transform="rotate(-15 58.793 85.207)"
      />
    </svg>
  );
});
