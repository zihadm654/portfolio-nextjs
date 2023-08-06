export const easing = [0.6, -0.05, 0.01, 0.99];
export const fadeIn = {
  hidden: {
    x: -35,
    opacity: 0,
    scale: 0.90,
  },
  show: {
    scale: 1,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

export const stagger = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
      ease: easing,
    },
  },
};
