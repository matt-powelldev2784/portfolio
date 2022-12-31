import { loadNavigationEventListners } from './eventListeners/navigation.js'
import { toogleTheme } from './theme/toggleTheme.js'

// setInterval(() => {
//   console.log('window.innerWidth', window.innerWidth)
//   console.log('window.innerHeight', window.innerHeight)
// }, 3000)

const loadEventListeners = () => {
  loadNavigationEventListners()
}

loadEventListeners()

const toggleTheme = document.addEventListener('keydown', (event) => {
  if (event.key === 'l') {
    toogleTheme()
  }
})
