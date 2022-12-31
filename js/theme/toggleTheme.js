import { lightThemeRoot } from './lightTheme.js'
import { lightThemeContactCard } from './lightTheme.js'
import { darkThemeRoot } from './darkTheme.js'
import { darkThemeContactCard } from './darkTheme.js'

const themes = { dark: 'dark', light: 'light' }
export let currentTheme = themes.dark

const toogleCssEntries = (styleSheeyRulesEnrty, theme) => {
  for (const [cssProp, cssValue] of Object.entries(theme)) {
    styleSheeyRulesEnrty.setProperty(cssProp, cssValue)
  }
}
const toogleLightTheme = () => {
  console.log('lightThemeRoot', lightThemeRoot)
  const rootSelector = document.styleSheets[1].cssRules[0].style
  const contactCard = document.styleSheets[7].cssRules[5].style
  toogleCssEntries(rootSelector, lightThemeRoot)
  toogleCssEntries(contactCard, lightThemeContactCard)
}

const toogleDarkTheme = () => {
  console.log('toggleDarkTheme')
  console.log('darkThemeRoot', darkThemeRoot)
  const rootSelector = document.styleSheets[1].cssRules[0].style
  const contactCard = document.styleSheets[7].cssRules[5].style
  toogleCssEntries(rootSelector, darkThemeRoot)
  toogleCssEntries(contactCard, darkThemeContactCard)
}

export const toogleTheme = () => {
  console.log('currentTheme', currentTheme)
  if (currentTheme === 'dark') {
    toogleLightTheme()
    currentTheme = themes.light
    console.log('currentThemeAfter', currentTheme)
    return
  }

  if (currentTheme === 'light') {
    toogleDarkTheme()
    currentTheme = themes.dark
    console.log('currentThemeAfter', currentTheme)
    return
  }
}

// const toggleThemeProperties = () => {
//   const rootSelector = document.styleSheets[1].cssRules[0].style
//   rootSelector.setProperty('--primary-text', '#216deb')
//   rootSelector.setProperty('--secondary-text', 'black')
//   rootSelector.setProperty('--bg-primary', 'white')
//   rootSelector.setProperty('--bg-secondary', '#f4f4f8')

//   const contactCard = document.styleSheets[7].cssRules[5].style
//   contactCard.setProperty(
//     '-webkit-box-shadow',
//     `0px 3px 5px -1px rgba(51, 51, 51, 0.5), 0px 5px 8px 0px rgba(51, 51, 51, 0.25),
//     0px 1px 14px 0px rgba(0, 0, 0, 0.12)`
//   )
//   contactCard.setProperty(
//     'box-shadow',
//     `0px 3px 5px -1px rgba(51, 51, 51, 0.5), 0px 5px 8px 0px rgba(51, 51, 51, 0.25),
//     0px 1px 14px 0px rgba(51, 51, 51, 2)`
//   )
// }
