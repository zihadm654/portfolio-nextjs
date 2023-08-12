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

export const menuSlide = {
  initial: {x: "calc(100% + 100px)"},
  enter: {x: "0", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}},
  exit: {x: "calc(100% + 100px)", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}}
}

export const slide = {
  initial: {x: 80},
  enter: i => ({x: 0, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}}),
  exit: i => ({x: 80, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}})
}

export const scale = {
  open: {scale: 1, transition: {duration: 0.3}},
  closed: {scale: 0, transition: {duration: 0.4}}
}