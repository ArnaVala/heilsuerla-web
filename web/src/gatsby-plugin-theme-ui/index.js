
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
    text: '#00465a',
    heading: '#163e4d',
    background: 'white',
    white: '#fff',
    primaryLight: '#00788c',
    primary: '#00465a',
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
    bold: 600
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
      width: '100vw',
      m: '0 auto'
    },
    section: {
      width: '100%',
      px: ['16px', '32px', '64px'],
      py: ['64px', '96px', '128px'],
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
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
      minWidth: '320px',
      flex: '1',
      px: '16px'
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
      my: ['32px', '64px', null],
      mx: ['32px', '64px', null, '128px'],
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
    wide: {
      width: '100%',
      maxWidth: '1360px',
      margin: '0 auto'
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
      backgroundColor: 'muted',
      color: 'primary',
      fontWeight: 'normal',
      margin: '0 auto',
      padding: 2,
      maxWidth: '100vw',
      a: {
        color: 'inherit',
        textDecoration: 'none'
      }
    },
    main: {
      bg: 'white',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'

    },
    container: {
      bg: 'white',
      width: '100vw',
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
      fontSize: [9, 11, '80px', '88px'],
      maxWidth: '600px',
      mb: '32px'
    },
    this: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'body',
      letterSpacing: '0.05em',
      fontSize: [5, 6, null, null, 6],
      mb: 3
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
      lineHeight: '1.5',
      fontSize: 3,
      mb: [4, null, null, 4]
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
      fontSize: '30px'
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
      fontSize: ['40px', '50px', '60px'],
      marginBottom: 3,
      maxWidth: '840px'
    },
    subtitle: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: ['30px', '40px']

    },
    eyebrow: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      textTransform: 'uppercase',
      color: 'accent',
      fontSize: '16px',
      letterSpacing: '.05em',
      mb: 3
    },

    postTitle: {
      fontFamily: 'heading',
      fontWeight: '500',
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
      px: 2,
      textDecoration: 'none',
      fontFamily: 'body',
      fontWeight: 'normal',
      letterSpacing: '0.05em',
      fontSize: '18px',
      '&:hover': {
        color: 'accent'
      },
      '&:active': {
        color: 'primary',
        borderBottom: '1px solid',
        borderColor: 'primary',
        transition: 'all 0.3s ease-in-out'
      }
    }

  },
  hr: {
    border: '2px solid black'
  },
  buttons: {

  },
  cards: {
    default: {
      bg: 'white',
      px: '32px',
      color: 'primaryLight',
      outline: '2px solid',
      outlineColor: 'primaryLight',
      zIndex: 2,

      '&:hover': {
        boxShadow: '0px 0px 48px rgba(0, 0, 0, 0.15)',
        zIndex: '10'
      }
    },
    primary: {
      color: 'primaryLight',
      padding: 2,
      borderRadius: 4,
      boxShadow: '0 12px 48px rgba(0, 0, 0, 1)'
    },
    testimonial: {
      display: 'flex',
      bg: 'muted',
      overflow: 'hidden',
      color: 'primary',
      p: '24px',
      m: ['0px', null, '64px'],
      borderRadius: '8px',

      quote: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mb: '24px'
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
