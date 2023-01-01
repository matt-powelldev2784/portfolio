import { nextSlide } from '../projects/nextSlide.js';

export const loadProjectsEventListeners = () => {
  const nextSlideArrow = document.getElementById('projects__nav_arrow_next');
  nextSlideArrow.addEventListener('click', nextSlide);
};
