setInterval(() => {
  console.log('window.innerWidth', window.innerWidth)
  console.log('window.innerHeight', window.innerHeight)
}, 3000)

const navigationItems = [
  {
    home: {
      menuElement: document.getElementById('main_nav__home'),
      sectionElement: document.getElementById('homepage__section'),
    },
  },
  {
    about: {
      menuElement: document.getElementById('main_nav__about'),
      sectionElement: document.getElementById('about__section'),
    },
  },
  {
    projects: {
      menuElement: document.getElementById('main_nav__projects'),
      sectionElement: document.getElementById('projects__section'),
    },
  },
  {
    contact: {
      menuElement: document.getElementById('main_nav__contact'),
      sectionElement: document.getElementById('contact__section'),
    },
  },
]

navigationItems.forEach((navigationItem) => {
  for (const [key, value] of Object.entries(navigationItem)) {
    const menuElement = value.menuElement
    const sectionElement = value.sectionElement
    menuElement.addEventListener(
      'click',

      () => {
        sectionElement.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'nearest' })
      }
      //
    )
  }
})

const loadEventListeners = () => {}
