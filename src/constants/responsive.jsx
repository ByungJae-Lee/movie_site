import React from 'react';

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1350 },
    items: 6,
  },
  laptop: {
    breakpoint: { max: 1350, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 465 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default responsive;
