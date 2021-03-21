
const fonts = {
  Sofia: "'Sofia Pro', 'Lato', 'Inter', sans-serif",
  Recoleta: "'Recoleta Alt', 'Georgia', 'Inter', serif"
}
export default {
  breakpoints: [
    '600px',
    '1000px',
    '1200px'
  ],
  fonts: {
    ...fonts,
    body: "'Sofia Pro', 'Lato', 'Inter', sans-serif",
    heading: "'Recoleta Alt', 'Georgia', 'Inter', serif",
    monospace: 'Menlo, monospace'
  },
  colors: {
    text: '#003c51',
    heading: '#003c51',
    background: 'white',
    white: '#fff',
    primaryLight: '#00788c',
    primary: '#003c51',
    primaryMuted: '#cde3e7',
    secondary: '#d2e4eb',
    accent: '#fe7576',
    muted: '#f3f0ee',
    accentMuted: '#ffd6d6',
    primaryBg: '#f2f5f6'
  },
  // fonts
  fontWeights: {
    body: 300,
    heading: 500,
    ultraLight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    bold: 500
  },
  fontSizes: [14, 16, 18, 20, 24, 32, 40, 48, 56, 64, 72, 80],
  letterSpacing: {
    body: '0',
    wide: '0.1em'
  },
  lineHeights: {
    body: 1.5,
    heading: 1.2
  },
  space: [0, 8, 16, 32, 64, 96, 128, 256, 512],
  radii: [4, 32],
  zIndices: [-1, 1],
  //

  container: {
    full: {
      minWidth: '100vw',
      width: '100%',
      m: '0 auto'
    },
    section: {
      width: '100%',
      minWidth: '100vw',
      px: ['0px', '32px', '64px'],
      py: ['64px', '96px', '128px'],
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      margin: '0 auto'
    },
    wide: {
      width: '100%',
      maxWidth: '1280px',
      margin: '0 auto'
    },
    inner: {
      width: '100%',
      maxWidth: '1120px',
      margin: '0 auto',
      px: [2, 3]
    },
    wrapper: {
      width: '100%',
      margin: '0 auto'
    },
    innerWrapper: {
      width: '100%',
      maxWidth: '1280px',
      margin: '0 auto',
      px: '32px'
    },
    grid: {
      width: '100%'
    },
    gridContainer: {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%'
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
      flexBasis: '100%',
      flex: '1'
    },
    textCol: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      height: '100%',
      minHeight: ['50vh', null, null, '100vh'],
      p: ['16px', null, null, '32px'],
      pl: ['16px', '64px', '32px', '128px'],
      pr: [null, '64px', '64px', null]
    },
    imgCol: {
      height: '100%',
      minHeight: ['50vh', null, null, null],
      p: 0
    },

    quoteBanner: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      px: ['16px', '32px', '64px'
      ],
      pt: '96px',
      pb: '32px'
    },
    hero: {
      bg: 'white',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      minHeight: '100vh'
    },

    flex: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    },
    excerpt: {
      fontSize: '24px',
      lineHeight: '32px',
      maxWidth: '70ch'
    },
    blog: {
      maxWidth: '70ch',
      lineHeight: '24px',
      m: '0 auto',
      py: 4,
      fontWeight: 300,

      ul: {
        maxWidth: '480px',
        lineHeight: '1.5',
        pl: 2,

        li: {
          pb: '8px'
        }
      }
    }
  },

  layout: {
    site: {
      color: 'primary',
      fontFamily: 'body',
      fontSize: 1,
      lineHeight: 'body',
      width: '100vw',
      height: '100%',
      margin: ' 0 auto',
      overflow: 'hidden'

    },
    header: {
      backgroundColor: 'transparent',
      fontWeight: 'normal',
      margin: '0 auto',
      width: '100%',
      pr: ['16px', '32px'],
      pl: ['16px', '32px'],
      py: '24px',

      logo: {
        width: ['40px', '48px', '64px']
      }
    },
    main: {
      bg: 'white',
      width: '100%',
      minWidth: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'

    },
    container: {
      bg: 'white',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden'
    }
  },
  text: {
    tag: {
      bg: 'accentMuted',
      textTransform: 'uppercase',
      fontSize: '14px',
      letterSpacing: 'wide',
      color: 'primaryLight',
      px: '16px',
      py: '16px',
      lineHeight: '14px',
      mb: '32px',
      borderRadius: '4px'

    },
    quote: {
      fontFamily: 'heading',
      fontSize: '30px',
      lineHeight: 'heading',
      pb: '32px',
      maxWidth: '640px'
    },
    hero: {
      fontFamily: 'heading',
      fontWeight: 'medium',
      lineHeight: '1.125',
      letterSpacing: '0.01em',
      fontSize: ['50px', '70px', '70px', '70px'],
      mb: '32px'
    },

    // collection of used
    body: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: '18px',
      lineHeight: 'body'
    },
    bigBody: {
      fontFamily: 'body',
      color: 'primary',
      fontWeight: '300',
      lineHeight: '1.5',
      fontSize: 3,
      mb: [2, 3]
    },
    description: {
      fontFamily: 'body',
      fontWeight: 'light',
      fontSize: '18px',
      lineHeight: 'body',
      mb: 3,
      maxWidth: '540px'
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: ['24px', '30px']
    },
    subheading: {
      fontFamily: 'body',
      fontWeight: 'heading',
      lineHeight: 'body',
      fontSize: '24px'
    },
    title: {
      fontFamily: 'Recoleta',
      fontWeight: '500',
      lineHeight: 'heading',
      fontSize: ['50px', '60px', '60px'],
      marginBottom: 3,
      maxWidth: '840px'
    },
    subtitle: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: ['30px', '40px', '50px']
    },
    cardtitle: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: ['32px', '40px', '50px']
    },
    eyebrow: {
      fontFamily: 'body',
      fontWeight: '400',
      lineHeight: 'body',
      textTransform: 'uppercase',
      color: 'primaryLight',
      fontSize: '16px',
      letterSpacing: '.05em',
      mb: 3
    },
    postTitle: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      fontSize: '24px'
    },
    caps: {
      fontFamily: 'body',
      fontWeight: 'body',
      textTransform: 'uppercase',
      letterSpacing: 'wide',
      fontSize: 1,
      mb: 3
    },
    label: {
      fontFamily: 'body',
      fontWeight: 'heading',
      textTransform: 'none',
      letterSpacing: 'wide',
      fontSize: [0, 1, null, null]
    },
    listItem: {
      fontFamily: 'body',
      fontSize: '16px',
      m: 0
    }
  },
  links: {
    nav: {
      color: 'primaryLight',
      display: ['none', 'none', 'grid'],
      gridTemplateColumns: 'auto 1fr',
      mx: 1,
      borderBottom: '1px solid',
      borderColor: 'transparent',
      transition: 'all 0.3s ease-in-out',

      '&:hover': {
        color: 'primaryLight',
        borderBottom: '1px solid',
        borderColor: 'primaryLight',
        transition: 'all 0.3s ease-in-out'

      },
      '&[aria-current= "page"]': {
        color: 'primary',
        borderBottom: '1px solid',
        borderColor: 'primary',
        transition: 'all 0.3s ease-in-out'
      }
    },
    hamburger: {
      px: 2,
      zIndex: '1000',
      textDecoration: 'none',
      color: 'white',
      fontFamily: 'body',
      fontWeight: 'normal',
      letterSpacing: '0.05em',
      fontSize: '24px',
      '&:hover': {
        color: 'pink'
      }
    }
  },
  hr: {
    border: '2px solid black'
  },
  buttons: {

  },
  slider: {
    arrow: {
      backgroundColor: 'accentMuted',
      border: '2px dotted transparent',
      color: 'accent',
      '&:focus': {
        borderColor: 'accent'
      },
      '&:hover': {
        color: 'accent',
        borderColor: 'accent'
      }
    },
    quoteSymbol: {
      backgroundColor: 'primaryMuted'
    }
  },
  cards: {
    default: {
      bg: 'white',
      px: ['16px', '32px', '64px'],
      py: ['64px', '96px', null],
      mx: ['16px', '0px', null],
      boxShadow: '0px 32px 64px rgba(0, 70, 90, 0.3)',
      zIndex: 2,

      '&:hover': {
        boxShadow: '0px 0px 32px rgba(0, 70, 90, 0.15)',
        zIndex: '10',
        bg: 'white'
      }
    },
    primary: {
      bg: 'muted',
      padding: 2,
      borderRadius: 4,
      boxShadow: '0 12px 32px rgba(0,0,0, 0.3)'
    },
    testimonial: {
      width: '100%',
      bg: 'primaryBg',
      px: ['16px', '32px', '64px'],

      quote: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mb: '24px',
        textAlign: 'center'
      }
    }
  },
  styles: {
    root: {
      h1: {
        variant: 'text.hero',
        margin: '0'
      },
      h2: {
        variant: 'text.title',
        margin: '0'
      },
      h3: {
        fontSize: '32px',
        margin: '0'
      },
      h4: {
        fontWeight: '600',
        fontSize: '32px'
      },
      h5: {
        variant: 'text.eyebrow',
        margin: '0'
      },
      h6: {
        variant: 'text.label'
      },
      p: {
        variant: 'text.body',
        m: 0,
        p: 0
      },
      em: {
        fontStyle: 'italic'
      },
      strong: {
        fontWeight: 'bold'
      },
      inline: {
        textDecoration: 'none'
      },
      a: {
        textDecoration: 'none',
        fontStyle: 'normal',
        color: 'primary',
        fontFamily: 'body',
        transform: 'color',
        '&:hover': {
          color: 'accent',
          textDecoration: 'none',
          cursor: 'pointer',
          transition: 'color .25s linear'
        }
      },
      blockquote: {
        fontFamily: 'heading',
        fontSize: '24px',
        m: '32px',
        padding: '0 0 0 1rem',
        borderColor: 'accent',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderLeftWidth: 4,
        borderRightWidth: 0,
        borderBottomWidth: 0
      },
      pre: {
        fontFamily: 'code',
        fontSize: [0, 1],
        p: [1, 2],
        color: 'text',
        bg: 'code',
        borderColor: 'accent',
        borderStyle: 'solid',
        borderWidth: 2
      },
      span: {
        fontFamily: 'inherit'
      },
      ul: {
        fontSize: '16px'
      },
      li: {
        fontFamily: 'body',
        color: 'primary',
        textAlign: 'left',
        fontSize: '18px'
      },
      ol: {
        p: '32px'
      },
      hr: {
        border: '1px solid',
        borderColor: 'primary'
      },
      body: {
        overflow: 'hidden',
        m: '0 auto',
        width: '100%',
        bg: 'white',
        fontFamily: 'body',
        fontSize: '18px',

        a: {
          textDecoration: 'none',
          color: 'accent',
          fontFamily: 'body',
          fontStyle: 'italic',
          transform: 'color',
          '&:hover': {
            color: 'accent',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'color .25s linear'
          }
        }

      }
    }
  }
}
