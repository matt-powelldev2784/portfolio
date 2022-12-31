const getDarkThemeRootFromCSS = () => {
  const darkThemeFromCSS = document.styleSheets[1].cssRules[0].cssText
  const darkThemeTrimmed = darkThemeFromCSS.substring(7).slice(0, -3)
  const darkThemeArray = darkThemeTrimmed.split(';')
  const darkThemeKeyValue = darkThemeArray.map((element) => {
    return element.split(':')
  })
  const darkThemeRootCSS = {}

  darkThemeKeyValue.forEach((themeProp) => {
    const key = themeProp[0].trim()
    const value = themeProp[1].trim()
    darkThemeRootCSS[key] = value
  })
  return darkThemeRootCSS
}

const getContactCardShadowsFromCSS = () => {
  const contactCard = document.getElementById('contact__card')
  const contactCardWebkitBoxShadow = getComputedStyle(contactCard).getPropertyValue('-webkit-box-shadow')
  const contactCardBoxShadow = getComputedStyle(contactCard).getPropertyValue('box-shadow')

  const contactCardShadowCSS = {}
  contactCardShadowCSS['box-shadow'] = contactCardBoxShadow
  contactCardShadowCSS['-webkit-box-shadow'] = contactCardWebkitBoxShadow

  return contactCardShadowCSS
}

export const darkThemeRoot = { ...getDarkThemeRootFromCSS() }
export const darkThemeContactCard = { ...getContactCardShadowsFromCSS() }
