import global from './global'
import breakpoints from './breakpoints'
import forms from './forms'

const fonts = {
  Sofia: "'Sofia Pro', 'Lato', 'Inter', sans-serif",
  Recoleta: "'Recoleta Alt', 'Georgia', 'Inter', serif"
}
export default {
  breakpoints,
  forms,
  fonts: {
    ...fonts,
    body: "'Sofia Pro', 'Lato', 'Inter', sans-serif",
    heading: "'Recoleta Alt', 'Georgia', 'Inter', serif"
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
    section: {
      width: '100%',
      minWidth: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 auto',
      py: ['64px', '96px', null, '128px']
    },
    sectionNoPad: {
      width: '100%',
      minWidth: '100vw',
      display: 'flex',
      flexDirection: 'column',
      margin: '0 auto',
      py: '0px'
    },
    full: {
      width: '100%',
      m: '0 auto'
    },
    wide: {
      width: '100%',
      maxWidth: '1280px',
      margin: '0 auto',
      px: ['20px', '64px', null, '0px']
    },
    excerpt: {
      m: '0 auto',
      maxWidth: '840px',
      p: {
        color: 'primaryLight',
        textAlign: 'center',
        fontFamily: 'heading',
        letterSpacing: '0.03em',
        fontWeight: '400',
        fontSize: ['18px', '20px'],
        pb: '24px'
      }

    },
    recipe: {
      flexDirection: 'column',
      textAlign: 'center',
      width: '100%',
      maxWidth: '560px',
      m: '0 auto',
      px: ['16px', '32px'],
      pb: ['32px', '64px'],
      my: ['16px', '32px'],

      h4: {
        color: 'primary',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: '500',
        letterSpacing: '0.03em',
        fontSize: '24px',
        pb: '16px',
        pt: '48px'
      },

      h5: {
        color: 'primaryLight',
        margin: '0 auto',
        fontSize: '14px',
        textTransform: 'uppercase',
        fontWeight: '500',
        pb: '8px',
        py: '16px',
        pt: '32px'
      },
      hr: {
        width: '100%',
        height: '0px',
        borderColor: 'primary'
      },
      p: {
        fontSize: ['16px', '18px'],
        maxWidth: '360px'
      },
      ul: {
        listStyleType: 'none',
        textAlign: 'center',
        p: '0'
      },
      li: {
        fontSize: ['16px', '18px'],
        maxWidth: '360px'
      }
    },

    blog: {
      maxWidth: '840px',
      m: '0 auto',
      py: 2,
      fontWeight: 300,

      ul: {
        maxWidth: '640px',
        m: '0 auto',
        lineHeight: 'body',
        pl: 2,

        li: {
          pb: '8px'
        }
      },
      p: {
        maxWidth: '640px',
        m: '0 auto',
        fontSize: ['16px', '18px'],
        lineHeight: ['24px', '28px'],
        fontFamily: 'body',
        pb: ['24px', '28px']
      },
      h2: {
        maxWidth: '640px',
        m: '0 auto',
        fontSize: ['24px'],
        lineHeight: 'heading',
        fontWeight: '600',
        py: ['24px']
      },
      h3: {
        maxWidth: '640px',
        m: '0 auto',
        fontSize: ['20px', '20px'],
        lineHeight: 'heading',
        fontWeight: '600',
        py: '16px'

      },
      a: {
        color: 'accent'
      }
    },

    narrow: {
      width: '100%',
      maxWidth: '960px',
      margin: '0 auto'
    },

    textCol: {
      m: '0 auto',
      flexDirection: 'column',
      flexBasis: '100%',
      flex: '1',
      justifyContent: 'center',
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
      flex: '1',
      flexbasis: '100%'
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
      pr: ['16px', '32px', '40px', null],
      pl: ['16px', '24px', '36px', null],
      py: '24px',

      logo: {
        width: ['40px', '48px', null, '64px']
      }
    },
    main: {
      overflow: 'hidden',
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
    hero: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      lineHeight: 'heading',
      letterSpacing: '0.01em',
      fontSize: ['48px', '72px', '64px', '80px', '96px'],
      py: '32px'
    },

    quote: {
      textAlign: 'center',
      m: '0',
      border: 'none',
      width: '100%',
      maxWidth: '720px'
    },
    title: {
      fontFamily: 'heading',
      fontWeight: '500',
      lineHeight: 'heading',
      fontSize: ['36px', '44px', '40px', '52px'],
      pb: '32px'
    },
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

    // collection of used
    smallBody: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: '16px',
      lineHeight: 'body'
    },
    body: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: ['16px', '18px', null, null],
      lineHeight: 'body',
      pb: '32px'

    },
    bigBody: {
      fontFamily: 'heading',
      color: 'primary',
      letterSpacing: '0.02em',
      fontWeight: '400',
      lineHeight: ['28px', '32px'],
      fontSize: ['18px', '20px'],
      pb: '32px'
    },

    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: ['32px', '40px', null, '48px'],
      fontSize: ['28px', '32px', null, '40px'],
      pb: '32px'
    },

    subheading: {
      fontFamily: 'body',
      fontWeight: 'heading',
      lineHeight: 'body',
      fontSize: '24px'
    },

    sectionTitle: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      lineHeight: 'heading',
      fontSize: ['32px', '40px']
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
      fontSize: ['14px', '16px'],
      letterSpacing: '.05em',
      pb: '32px',
      color: 'accent'

    },
    postTitle: {
      fontFamily: 'heading',
      fontWeight: '400',
      lineHeight: 'heading',
      fontSize: '28px',
      textAlign: 'center'
    },
    postCategory: {
      fontFamily: 'body',
      fontWeight: 'body',
      textAlign: 'center',
      color: 'primaryLight',
      textTransform: 'uppercase',
      letterSpacing: 'wide',
      fontSize: 1
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
      color: 'primaryBg',
      fontFamily: 'heading',
      fontWeight: '300',
      letterSpacing: '0.05em',
      mt: '24px',
      pb: '4px',
      fontSize: ['20px', '24px'],
      borderBottom: '1px solid',
      borderColor: 'transparent',
      transition: 'all 0.3s ease-in-out',

      '&:hover': {
        color: 'accent',
        borderBottom: '1px solid',
        borderColor: 'accent',
        transition: 'all 0.3s ease-in-out'

      },
      '&[aria-current= "page"]': {
        color: 'primaryBg',
        borderBottom: '1px solid',
        borderColor: 'primaryBg',
        transition: 'all 0.3s ease-in-out'
      }
    },
    textLink: {
      color: 'accent',
      bg: 'primaryMuted'
    }
  },
  hr: {
    border: '2px solid black'
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
  grid: {
    bigCard: {
      display: 'grid',
      gridTemplateColumns: ['1fr', '1fr', '1fr 1fr', '2fr 3fr'],
      gridGap: [2, null, 3, null],
      margin: '0 auto'
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
    feature: {
      bg: 'white',
      boxShadow: '0px 32px 64px rgba(0, 70, 90, 0.3)',
      zIndex: 2,

      '&:hover': {
        boxShadow: '0px 0px 32px rgba(0, 70, 90, 0.15)',
        zIndex: '10',
        bg: 'white'
      }
    },
    image: {
      boxShadow: '0px 32px 64px rgba(0, 70, 90, 0.3)'
    },

    testimonial: {
      m: '0 auto',
      my: '96px',
      bg: 'white',
      boxShadow: '0px 32px 64px rgba(0, 70, 90, 0.3)',
      zIndex: 2,
      width: '100%',
      maxWidth: '720px',
      py: '64px',
      px: '32px',
      textAlign: 'center',
      color: 'primaryLight',

      '&:hover': {
        boxShadow: '0px 0px 32px rgba(0, 70, 90, 0.15)',
        zIndex: '10',
        bg: 'white'
      }
    },
    postCard: {
      bg: 'white',
      boxShadow: '0px 32px 64px rgba(0, 70, 90, 0.3)',
      zIndex: 2,

      '&:hover': {
        boxShadow: '0px 0px 32px rgba(0, 70, 90, 0.15)',
        zIndex: '10',
        bg: 'white'
      }
    },
    featureCard: {
      bg: 'white',
      boxShadow: '0px 32px 64px rgba(0, 70, 90, 0.3)',
      zIndex: 2,

      '&:hover': {
        boxShadow: '0px 0px 32px rgba(0, 70, 90, 0.15)',
        zIndex: '10',
        bg: 'white'
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
        color: 'primaryLight',
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
  },
  global
}
