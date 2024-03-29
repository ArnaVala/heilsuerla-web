import {trackCustomEvent} from 'gatsby-plugin-google-analytics'

const trackGAEvent = (category, action, label, value = 0) => {
  trackCustomEvent({
    category,
    action,
    label,
    value
  })
}

export default trackGAEvent
