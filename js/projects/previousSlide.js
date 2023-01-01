import { currentSlide } from './loadCarouselSlide.js';
import { removeCurrentSlide } from './removeCurrentSlide.js';
import { loadCarouselSlide } from './loadCarouselSlide.js';
import { projects } from './projects.js';

export const prevSlide = () => {
  const { currentSlideNumber } = currentSlide;

  let nextSlide = currentSlideNumber;
  if (currentSlideNumber === 0) {
    nextSlide = projects.length - 1;
  } else {
    nextSlide--;
  }
  removeCurrentSlide();
  currentSlide.currentSlideNumber = nextSlide;
  loadCarouselSlide(nextSlide);
};
