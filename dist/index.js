// Imports
import { UISelectors, navHoverState, hideNavHoverState } from '../modules/ui.js'

// Event Listeners
UISelectors.arrow.addEventListener('mouseenter', navHoverState)
UISelectors.nav.addEventListener('mouseleave', hideNavHoverState)
