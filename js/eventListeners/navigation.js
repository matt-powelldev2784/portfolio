import { menuElements } from './navigationItems.js';
import { pageSections } from './navigationItems.js';

const scrollToSection = (event) => {
  const page = event.currentTarget.id.substring(10);
  const sectionElement = pageSections[page];
  sectionElement.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'center' });
};

export const loadNavigationEventListners = () => {
  for (const menuElement of Object.values(menuElements)) {
    menuElement.addEventListener('click', scrollToSection);
  }
};
