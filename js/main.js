setInterval(() => {
  console.log('window.innerWidth', window.innerWidth)
  console.log('window.innerHeight', window.innerHeight)
}, 3000)

const homepage = document.getElementsByClassName('homepage__section')[0]
const about = document.getElementsByClassName('about__section')[0]
const projects = document.getElementsByClassName('projects__section')[0]
const contact = document.getElementsByClassName('contact__section')[0]
const nav = document.getElementsByClassName('main_nav__links_flexbox')[0]

setTimeout(() => {
  contact.scrollIntoView(true, { block: 'start', behavior: 'smooth', inline: 'nearest' })
}, 5000)
