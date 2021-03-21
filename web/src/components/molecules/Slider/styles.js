export const arrowStyles = {
  cursor: 'pointer',
  borderRadius: '50%',
  display: 'none',
  fontSize: 0,
  height: '40px',
  width: '40px',
  lineHeight: 0,
  outline: 'none',
  padding: '0.5rem',
  position: 'absolute',
  bottom: ['-70px', null, '50%'],
  transform: [null, null, 'translate(0, 50%)']

}

export const dotContainerStyles = {
  position: 'relative',
  width: '100%',
  p: '48px',
  m: 0,
  listStyle: 'none',
  textAlign: 'center',
  ul: {
    m: 0,
    p: 0
  },

  li: {
    position: 'relative',
    display: 'inline-block',
    m: 0,
    p: 0,

    cursor: 'pointer',

    '&.slick-active :before': {
      bg: 'primaryLight'
    }
  }
}

export const dotStyles = {
  bg: 'primaryBg',
  borderRadius: '50%',
  border: '2px dotted transparent',
  cursor: 'pointer',
  display: 'block',
  height: '40px',
  outline: 'none',
  textAlign: 'center',
  width: 40,
  zIndex: 10,
  m: '4px',

  ':focus': {
    borderColor: 'primary'
  },

  ':before': {
    bg: 'none',
    border: '2px solid',
    borderColor: 'primaryLight',
    width: 14,
    height: 14,
    content: '""',
    textAlign: 'center',
    display: 'inline-block',
    borderRadius: '50%',

    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale'
  },

  span: {
    opacity: 0,
    pointerEvents: 'none'
  },

  '&:hover span': {
    opacity: 1
  }
}

export const dotLabelStyles = {
  bottom: -48,
  display: 'none',
  bg: 'primary',
  borderRadius: 4,
  fontWeight: '300',
  fontSize: 'body',
  transition: 'opacity 0.2s linear',
  p: 2,
  position: 'absolute',
  transform: 'translateX(-50%)',
  width: 220,
  left: 24,

  '&::after': {
    borderLeft: '1rem solid transparent',
    borderRight: '1rem solid transparent',
    borderBottom: '1rem solid',
    borderBottomColor: 'primary',
    content: '""',
    left: '50%',
    marginLeft: '-1rem',
    position: 'absolute',
    top: '-0.5rem',
    height: 0,
    width: 0
  }
}

export const slickStyles = {
  '.slick-slider': {
    position: 'relative',
    display: 'block',
    boxSizing: 'border-box',

    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',

    WebkitTouchCallout: 'none',
    KhtmlUserSelect: 'none',
    msTouchAction: 'pan-y',
    touchAction: 'pan-y',
    WebkitTapHighlightColor: 'transparent'
  },

  '.slick-list': {
    position: 'relative',
    display: 'block',
    overflow: 'hidden',
    margin: 0,
    padding: 0
  },

  '.slick-list:focus': {
    outline: 'none'
  },

  '.slick-list.dragging': {
    cursor: 'pointer'
  },

  '.slick-slider .slick-track, .slick-slider .slick-list': {
    WebkitTransform: 'translate3d(0, 0, 0)',
    MozTransform: 'translate3d(0, 0, 0)',
    msTransform: 'translate3d(0, 0, 0)',
    OTransform: 'translate3d(0, 0, 0)',
    transform: 'translate3d(0, 0, 0)'
  },

  '.slick-track': {
    position: 'relative',
    top: 0,
    left: 0,
    display: 'block',
    mx: 'auto'
  },

  '.slick-track:before, .slick-track:after': {
    display: 'table',
    content: '""'
  },

  '.slick-track:after': {
    clear: 'both'
  },

  '.slick-loading .slick-track': {
    visibility: 'hidden'
  },

  '.slick-slide': {
    display: 'none',
    float: 'left',
    height: '100%',
    minHeight: 1
  },

  "[dir='rtl'] .slick-slide": {
    float: 'right'
  },

  '.slick-slide img': {
    display: 'block'
  },

  '.slick-slide.slick-loading img': {
    display: 'none'
  },

  '.slick-slide.dragging img': {
    pointerEvents: 'none'
  },

  '.slick-initialized .slick-slide': {
    display: 'block'
  },

  '.slick-loading .slick-slide': {
    visibility: 'hidden'
  },

  '.slick-vertical .slick-slide': {
    display: 'block',
    height: 'auto',
    border: '1px solid transparent'
  },

  '.slick-arrow.slick-hidden': {
    display: 'none'
  },

  '.slick-loading .slick-list': {
    background: '#fff'
  },

  '.slick-dotted.slick-slider': {
    mb: 30
  }
}
