import { loadNavigationEventListners } from './eventListeners/navigation.js'

// setInterval(() => {
//   console.log('window.innerWidth', window.innerWidth)
//   console.log('window.innerHeight', window.innerHeight)
// }, 3000)

const loadEventListeners = () => {
  loadNavigationEventListners()
}

loadEventListeners()

const darkTheme = document.styleSheets[1].cssRules[0].cssText

const lightTheme = `:root {
  --primary-text: red;
  --secondary-text: white;
  --bg-primary: #161616;
  --bg-secondary: #202020;
  ---nav-height: 4rem;
  ---nav-height-mob: 5rem;
}`

const themeColors = document.styleSheets[1].cssRules[0].style

const toggleTheme = document.addEventListener('keydown', (event) => {
  if (event.keyCode === 76) {
    toggleThemeProperties()
  }
})

const toggleThemeProperties = () => {
  const rootSelector = document.styleSheets[1].cssRules[0].style
  rootSelector.setProperty('--primary-text', '#216deb')
  rootSelector.setProperty('--secondary-text', 'black')
  rootSelector.setProperty('--bg-primary', 'white')
  rootSelector.setProperty('--bg-secondary', '#f4f4f8')

  const contactCard = document.styleSheets[7].cssRules[5].style
  contactCard.setProperty(
    '--bg- -webkit-box-shadow',
    `0px 3px 5px -1px rgba(51, 51, 51, 0.5), 0px 5px 8px 0px rgba(51, 51, 51, 0.25),
    0px 1px 14px 0px rgba(0, 0, 0, 0.12)`
  )
  contactCard.setProperty(
    'box-shadow',
    `0px 3px 5px -1px rgba(51, 51, 51, 0.5), 0px 5px 8px 0px rgba(51, 51, 51, 0.25),
    0px 1px 14px 0px rgba(51, 51, 51, 2)`
  )

  // document.styleSheets[1].cssRules[0].style.setProperty('--primary-text', '#216deb')
  // document.styleSheets[1].cssRules[0].style.setProperty('--secondary-text', 'black')
  // document.styleSheets[1].cssRules[0].style.setProperty('--bg-primary', 'white')
  // document.styleSheets[1].cssRules[0].style.setProperty('--bg-secondary', '#f4f4f8')
}

toggleThemeProperties()
