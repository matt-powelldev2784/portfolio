import { toogleTheme } from '../theme/toggleTheme.js'

export const toggleThemeEventListeners = () => {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'l') {
      toogleTheme()
    }
  })
}
