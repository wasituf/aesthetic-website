export const UISelectors = {
  arrow: document.querySelector('.arrow'),
  arrowLeft: document.querySelector('.arrow-left'),
  arrowRight: document.querySelector('.arrow-right'),
  navHover: document.querySelector('.nav-hover'),
  nav: document.querySelector('.nav'),
}

function animateOpacity(type, element, opacity) {
  if (type === 'add') {
    if (opacity < 1) {
      opacity += 0.1
      setTimeout(function () {
        animateOpacity(type, element, opacity)
      }, 20)
    }
    element.style.opacity = opacity
  } else if (type === 'subtract') {
    if (opacity > 0) {
      opacity -= 0.1
      setTimeout(function () {
        animateOpacity(type, element, opacity)
      }, 20)
    }
    element.style.opacity = opacity
  }
}

// Nav hover state
export function navHoverState() {
  UISelectors.arrowLeft.style.borderBottomRightRadius = '5px'
  UISelectors.arrowLeft.style.transform =
    'rotateZ(30deg) translateX(8px) scaleX(70%)'
  UISelectors.arrowRight.style.borderBottomLeftRadius = '5px'
  UISelectors.arrowRight.style.transform =
    'rotateZ(-30deg) translateX(-8px) scaleX(70%)'

  animateOpacity('add', UISelectors.navHover, 0)
}

// Hide nav hover state
export function hideNavHoverState() {
  UISelectors.arrowLeft.style.borderBottomRightRadius = 0
  UISelectors.arrowLeft.style.transform = 'none'
  UISelectors.arrowRight.style.borderBottomLeftRadius = 0
  UISelectors.arrowRight.style.transform = 'none'
  animateOpacity('subtract', UISelectors.navHover, 1)
}
