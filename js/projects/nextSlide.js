import { currentSlide } from './loadCarouselSlide.js';
import { removeCurrentSlide } from './removeCurrentSlide.js';
import { loadCarouselSlide } from './loadCarouselSlide.js';
import { projects } from './projects.js';

export const nextSlide = () => {
  const { currentSlideNumber } = currentSlide;

  let nextSlide = currentSlideNumber;
  if (currentSlideNumber === projects.length - 1) {
    nextSlide = 0;
  } else {
    nextSlide++;
  }
  removeCurrentSlide();
  currentSlide.currentSlideNumber = nextSlide;
  loadCarouselSlide(nextSlide);
};
