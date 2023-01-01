import { nextSlide } from '../projects/nextSlide.js';
import { prevSlide } from '../projects/prevSlide.js';

export const loadProjectsEventListeners = () => {
  const nextSlideArrow = document.getElementById('projects__nav_arrow_next');
  nextSlideArrow && nextSlideArrow.addEventListener('click', nextSlide);

  const prevSlideArrow = document.getElementById('projects__nav_arrow_prev');
  prevSlideArrow && prevSlideArrow.addEventListener('click', prevSlide);
};
