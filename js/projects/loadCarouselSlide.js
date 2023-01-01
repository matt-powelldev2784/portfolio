import { projects } from './projects.js';
import { createCarouselSlide } from './createCarouselSlide.js';

export const currentSlide = { currentSlideNumber: 4 };

export const loadCarouselSlide = (slideNumber) => {
  createCarouselSlide(projects[slideNumber]);
};
