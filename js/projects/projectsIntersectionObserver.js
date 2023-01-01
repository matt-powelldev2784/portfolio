export const loadProjectsObserver = () => {
  const projectsObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      const swipeIcon = document.getElementById('projects__nav_swipe_icon_conatiner');
      swipeIcon.classList.remove('projects__nav_swipe_icon_conatiner');
      swipeIcon.classList.add('projects__nav_swipe_icon_conatiner_animation');
    }
  });

  const projects = document.getElementById('projects__section');
  projectsObserver.observe(projects);
};
