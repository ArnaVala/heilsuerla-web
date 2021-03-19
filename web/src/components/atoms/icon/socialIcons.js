/** @jsx jsx */

import React from 'react'
import {jsx} from 'theme-ui'
import {
  RiFacebookLine,
  RiTwitterLine,
  RiInstagramLine,
  RiWhatsappLine,
  RiLinkedinLine
} from 'react-icons/ri'

const SocialIcon = ({name, url, style}) => {
  const renderIcon = () => {
    switch (name) {
      case 'Facebook':
        return (
          <RiFacebookLine
            sx={{
              ...style,
              '&:hover': {
                color: 'accent'
              }
            }}
          />
        )
      case 'Twitter':
        return (
          <RiTwitterLine
            sx={{
              ...style,
              '&:hover': {
                color: 'accent'
              }
            }}
          />
        )

      case 'Instagram':
        return (
          <RiInstagramLine
            sx={{
              ...style,
              '&:hover': {
                color: 'accent'
              }
            }}
          />
        )
      case 'LinkedIn':
        return (
          <RiLinkedinLine
            sx={{
              ...style,
              '&:hover': {
                color: 'accent'
              }
            }}
          />
        )

      case 'WhatsApp':
        return (
          <RiWhatsappLine
            sx={{
              ...style,
              '&:hover': {
                color: 'accent'
              }
            }}
          />
        )
      default:
        return null
    }
  }

  return (
    <a
      href={url}
      target='_blank'
      rel='noreferrer noopener'
      aria-label={name}
      title={name}
      onClick={() => trackGAEvent('social icons', `clicked on ${name} link`, 'icon click')}
    >
      {renderIcon()}
    </a>
  )
}

export default SocialIcon
