import { toogleTheme } from '../theme/toggleTheme.js'

export const toggleThemeEventListeners = () => {
  const lightElement = document.getElementById('contact_nav__theme_toggle')
  lightElement.addEventListener('click', toogleTheme)

  document.addEventListener('keydown', (event) => {
    if (event.key === 'l') {
      toogleTheme()
    }
  })
}
