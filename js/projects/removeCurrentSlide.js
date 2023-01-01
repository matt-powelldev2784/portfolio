import { currentSlide } from './loadCarouselSlide.js';

export const removeCurrentSlide = () => {
  const { currentSlideNumber } = currentSlide;
  const slide = document.getElementById(`projects_carousel__item${currentSlideNumber}`);
  const dots = document.getElementById('projects_nav_dot_container');
  slide.remove();
  dots.remove();
};
