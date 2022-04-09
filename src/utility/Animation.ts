export const easing = [0.6, -0.05, 0.01, 0.99];
export const fadeIn = {
  hidden: {
    y: 35,
    opacity: 0,
    scale: 0.98,
  },
  show: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
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
      staggerChildren: 0.3,
    },
  },
};
