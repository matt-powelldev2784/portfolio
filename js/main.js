import { loadNavigationEventListners } from './eventListeners/navigation.js';
import { toggleThemeEventListeners } from './eventListeners/toggleTheme.js';
import { loadProjectsEventListeners } from './eventListeners/projects.js';
import { loadCarouselSlide } from './projects/loadCarouselSlide.js';
import { currentSlide } from './projects/loadCarouselSlide.js';

setInterval(() => {
  console.log('window.innerWidth', window.innerWidth);
  console.log('window.innerHeight', window.innerHeight);
}, 3000);

const loadEventListeners = () => {
  loadNavigationEventListners();
  toggleThemeEventListeners();
  //loadProjectsEventListeners();
};
loadEventListeners();

// loadCarouselSlide(currentSlide.currentSlideNumber);
