import { createElement } from '../helpers/createElement.js';
import { projects } from './projects.js';

export const createCarouselSlide = (projectInfo) => {
  const { key, title, text, techImages, image, imageAlt } = projectInfo;

  //flexbox item1
  const img = createElement('img', {
    src: image,
    class: 'projects_carosel_img',
    alt: imageAlt,
  });
  const flexBoxItem1 = createElement('div', { class: 'projects_carosel__flexbox__item1' }, img);

  //flexbox item2
  const h1 = createElement('h1', { class: 'projects__h1' }, title);
  const p = createElement('p', { class: 'projects_p' }, text);
  const techStack = techImages.map((techType) => {
    const { src, alt } = techType;
    const img = createElement('img', { class: 'projects__icon', src: src, alt: alt });
    return img;
  });
  const techStackContainer = createElement('div', { class: 'projects__tech_stack' }, ...techStack);
  const flexBoxItem2 = createElement('div', { class: 'projects_carosel__flexbox__item2' }, h1, p, techStackContainer);

  const carouselItem = createElement(
    'div',
    { class: 'projects_carosel__wrapper', id: `projects_carousel__item${key}` },
    flexBoxItem1,
    flexBoxItem2
  );

  //dots
  const dots = projects.map((projects, i) => {
    const dotClass = projectInfo.key === i ? 'projects_nav_dot_active' : 'projects_nav_dot';

    const dot = createElement('img', {
      class: dotClass,
      src: './img/svg_sprites/dot_icon.png',
    });

    return dot;
  });

  const dotsContainer = createElement(
    'div',
    { class: 'projects_nav_dot_container', id: 'projects_nav_dot_container' },
    ...dots
  );

  const projectCarouselContainer = document.getElementById('projects_carosel__container');
  projectCarouselContainer.append(carouselItem, dotsContainer);
};
