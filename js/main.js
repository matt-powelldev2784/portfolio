import { loadNavigationEventListners } from './eventListeners/navigation.js';
import { toggleThemeEventListeners } from './eventListeners/toggleTheme.js';

setInterval(() => {
  console.log('window.innerWidth', window.innerWidth);
  console.log('window.innerHeight', window.innerHeight);
}, 3000);

const loadEventListeners = () => {
  loadNavigationEventListners();
  toggleThemeEventListeners();
};
loadEventListeners();
