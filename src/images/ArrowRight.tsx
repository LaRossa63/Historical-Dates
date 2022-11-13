import React, { FC, SVGProps } from 'react';

export const ArrowRight: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <>
      <svg width="6" height="8" viewBox="0 0 6 8" fill="none" {...props}>
        <path
          d="M1.58386 1.04178L4.70886 4.16678L1.58386 7.29178"
          stroke="#42567A"
          strokeWidth="2"
        />
      </svg>
    </>
  );
};
