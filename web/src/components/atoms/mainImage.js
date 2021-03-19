import React from 'react'
import Img from 'gatsby-image'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import clientConfig from '../../../client-config'

export default ({image}) => {
  if (!image || !image.asset || !image.asset._id) {
    return null
  }
  const fluidProps = getFluidGatsbyImage(image.asset._id, {maxWidth: 900}, clientConfig.sanity)
  return (
    <picture>
      <Img fluid={fluidProps} alt={image.alt} />
    </picture>
  )
}
