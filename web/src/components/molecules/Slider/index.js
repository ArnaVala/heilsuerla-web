
/** @jsx jsx */
import React from 'react'
import {jsx, Box, Flex} from 'theme-ui'
import SlickSlider from 'react-slick'

import {arrowStyles, dotContainerStyles, slickStyles} from './styles'
import DotsWithLabel from './DotsWithLabel'
import Icon from '../../atoms/Icons'

/* const NextArrow = (props) => {
  const {onClick} = props

  return (
    <Box
      as='button'
      type='button'
      variant='arrow'
      onClick={onClick}
      __themeKey='slider'
      __css={{
        right: ['35%', null, null, '-52px'],
        ...arrowStyles
      }}
      aria-label='Næsta umsögn'
    >
      <Icon name='arrowRight' />
    </Box>
  )
}

const PrevArrow = (props) => {
  const {onClick} = props

  return (
    <Box
      as='button'
      type='button'
      variant='arrow'
      onClick={onClick}
      __themeKey='slider'
      sx={{
        left: ['35%', null, null, '-52px'],
        ...arrowStyles
      }}
      aria-label='Fyrri umsögn'
    >
      <Icon name='arrowLeft' />
    </Box>
  )
} */

const AppendDots = (dots) => {
  return (
    <Box sx={{position: 'relative', top: '-64px'}}>
      <Box sx={dotContainerStyles} variant='slider.appendDots'>
        <ul>{dots}</ul>
      </Box>
    </Box>
  )
}

const Slider = ({
  children,
  speed,
  draggable,
  dotsWithLabel,
  dotsLabel,
  ...props
}) => {
  const customPagingProp = dotsWithLabel
    ? {customPaging: (i) => DotsWithLabel(i, dotsLabel)}
    : {}

  return (
    <Box __css={slickStyles}>
      <SlickSlider
        appendDots={AppendDots}
        draggable={draggable}
        speed={speed}
        {...customPagingProp}
        {...props}
      >
        {children}
      </SlickSlider>
    </Box>
  )
}

export default Slider
