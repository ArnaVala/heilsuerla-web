import React from 'react'
import {Box} from 'theme-ui'
import SlickSlider from 'react-slick'

import {arrowStyles, dotContainerStyles, slickStyles} from './styles'
import DotsWithLabel from './DotsWithLabel'
import Icon from '../../atoms/Icons'

const NextArrow = (props) => {
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
      __css={{
        left: ['35%', null, null, '-52px'],
        ...arrowStyles
      }}
      aria-label='Fyrri umsögn'
    >
      <Icon name='arrowLeft' />
    </Box>
  )
}

const AppendDots = (dots) => {
  return (
    <Box __css={dotContainerStyles} __themeKey='slider.appendDots'>
      <ul>{dots}</ul>
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
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
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
