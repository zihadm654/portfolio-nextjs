import { gsap, TweenMax, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export const screenAnimation = (elem) => {
  TweenMax.from(elem, {
    duration: 2.5,
    css: { height: '100%', display: 'block' },
    ease: Power3.easeOut,
  });
};
export const VerticalScroll = (elem) => {
  TweenMax.from(elem, 1, {
    delay: 1.8,
    opacity: 0,
    y: -30,
    ease: Power3.inOut,
  });
};
export const HorizontalScroll = (elem) => {
  TweenMax.fromTo(
    elem,
    1,
    {
      width: '0%',
      delay: 0.1,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: elem,
        start: 'top 90%',
        end: 'bottom center',
      },
    },
    {
      ease: Power3.easeOut,
      width: '100%',
      scrollTrigger: {
        trigger: elem,
        start: 'top 90%',
        end: 'bottom center',
      },
    }
  );
};
export const textIntro = (elem) => {
  TweenMax.staggerFrom(
    elem,
    0.7,
    {
      opacity: 0,
      y: 50,
      delay: 0.4,
      ease: Power3.easeOut,
    },
    0.5
  );
};
export const Links = (elem) => {
  TweenMax.staggerFrom(
    elem,
    0.7,
    { opacity: 0, delay: 0.7, y: 60, ease: Power3.easeOut },
    0.1
  );
};
export const describe = (elem) => {
  TweenMax.from(elem, 0.5, {
    opacity: 0,
    y: 50,
    ease: Power3.inOut,
    scale: 0.99,
    scrollTrigger: {
      trigger: elem,
      start: 'top 85%',
      end: 'bottom center',
      scale: 0.8,
    },
  });
};
export const cardAni = (elem) => {
  TweenMax.from(elem, 1, {
    opacity: 0,
    x: 30,
    ease: Power3.inOut,
    scrollTrigger: {
      trigger: elem,
      start: 'top 90%',
      end: 'bottom center',
    },
  });
};
// OPEN MENU
export const staggerReveal = (node1, node2) => {
  gsap.from([node1, node2], {
    duration: 0.8,
    height: 0,
    transformOrigin: 'right top',
    skewY: 2,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.1,
    },
  });
};

// CLOSE MENU
export const staggerRevealClose = (node1, node2) => {
  gsap.to([node1, node2], {
    duration: 0.8,
    height: 0,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.03,
    },
  });
};

// STAGGER THE LINKS TO APPEAR
export const staggerText = (node1, node2, node3) => {
  gsap.from([node1, node2, node3], {
    duration: 0.8,
    y: 100,
    delay: 0.1,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.3,
    },
  });
};

// Fade up for the additonal info on our menu
export const fadeInUp = (node) => {
  gsap.from(node, {
    y: 60,
    duration: 1,
    delay: 0.2,
    opacity: 0,
    ease: 'power3.inOut',
  });
};

// work windmill
export const loaderAni = (el) => {
  TweenMax.staggerFromTo(
    el,
    1.5,
    {
      y: 0,
      delay: 0.5,
    },
    {
      opacity: 0,
      y: -45,
      ease: Power3.inOut,
    },
    0.9
  );
};
export const blink = (el) => {
  TweenMax.staggerTo(
    el,
    0.9,
    {
      ease: 'power3.easeOut',
      opacity: 1,
    },
    0.9
  );
};
