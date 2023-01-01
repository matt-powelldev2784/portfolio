import { loadNavigationEventListners } from './eventListeners/navigation.js';
import { toggleThemeEventListeners } from './eventListeners/toggleTheme.js';
import { loadProjectsEventListeners } from './eventListeners/projects.js';
import { loadCarouselSlide } from './projects/loadCarouselSlide.js';
import { currentSlide } from './projects/loadCarouselSlide.js';
import { createElement } from './helpers/createElement.js';

setInterval(() => {
  console.log('window.innerWidth', window.innerWidth);
  console.log('window.innerHeight', window.innerHeight);
}, 3000);

loadCarouselSlide(currentSlide.currentSlideNumber);
const test = document.getElementById('homepage__section');
const test1 = createElement(
  'div',
  { class: 'homepage_text__h1' },
  currentSlide.currentSlideNumber,
  currentSlide.currentSlideNumber,
  currentSlide.currentSlideNumber,
  currentSlide.currentSlideNumber,
  currentSlide.currentSlideNumber,
  currentSlide.currentSlideNumber,
  currentSlide.currentSlideNumber
);
test.append(test1);

const loadEventListeners = () => {
  loadNavigationEventListners();
  //toggleThemeEventListeners();
  //loadProjectsEventListeners();
};
loadEventListeners();
