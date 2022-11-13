import React, { FC, SVGProps } from 'react';

export const ArrowLeft: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <>
      <svg width="6" height="8" viewBox="0 0 6 8" fill="none" {...props}>
        <path
          d="M4.7489 1.04178L1.6239 4.16678L4.7489 7.29178"
          stroke="#42567A"
          strokeWidth="2"
        />
      </svg>
    </>
  );
};
