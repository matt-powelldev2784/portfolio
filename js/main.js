import { loadNavigationEventListners } from './eventListeners/navigation.js';
import { toggleThemeEventListeners } from './eventListeners/toggleTheme.js';
import { loadProjectsEventListeners } from './eventListeners/projects.js';
import { loadCarouselSlide } from './projects/loadCarouselSlide.js';
import { currentSlide } from './projects/loadCarouselSlide.js';
import { addTouchDetectionEventListeners } from './eventListeners/touchDetection.js';
import { nextSlide } from './projects/nextSlide.js';
import { prevSlide } from './projects/prevSlide.js';
import { loadProjectsObserver } from './projects/projectsIntersectionObserver.js';

setInterval(() => {
  console.log('window.innerWidth', window.innerWidth);
  console.log('window.innerHeight', window.innerHeight);
}, 3000);

loadCarouselSlide(currentSlide.currentSlideNumber);
loadNavigationEventListners();
toggleThemeEventListeners();
loadProjectsEventListeners();
loadProjectsObserver();

const projects = document.getElementById('projects__section');
const swipeFunctions = { swipeLeftFunction: nextSlide, swipeRightFunction: prevSlide };
addTouchDetectionEventListeners(projects, swipeFunctions);
