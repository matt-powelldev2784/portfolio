import { nextSlide } from '../projects/nextSlide.js';
import { prevSlide } from '../projects/prevslide.js';

export const loadProjectsEventListeners = () => {
  const nextSlideArrow = document.getElementById('projects__nav_arrow_next');
  nextSlideArrow.addEventListener('click', nextSlide);

  const prevSlideArrow = document.getElementById('projects__nav_arrow_prev');
  prevSlideArrow.addEventListener('click', prevSlide);
};
