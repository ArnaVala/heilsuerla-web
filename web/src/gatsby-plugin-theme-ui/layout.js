export default {
  layout: {
    site: {
      color: 'primary',
      fontFamily: 'body',
      fontSize: 1,
      lineHeight: 'body',
      width: '100vw',
      height: '100%',
      mx: 'auto',
      overflow: 'hidden'
    },
    header: {
      mx: 'auto',
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
    }
  }
}
