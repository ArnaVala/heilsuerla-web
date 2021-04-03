
/** @jsx jsx */
import {jsx, Box} from 'theme-ui'
import SocialIcon from '../../atoms/icon/socialIcons'

const Social = ({...props}) => {
  const socialPlatforms = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/Heilsumarkthjalfunerlu/'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/heilsuerla_heilsumarkthjalfun/'
    }
  ]

  return (
    <Box {...props}>
      {socialPlatforms.map((platform, index) => {
        return (
          <SocialIcon
            name={platform.name}
            url={platform.url}
            style={{mx: '16px', color: 'primaryMuted'}}
            key={index}
          />
        )
      })}
    </Box>
  )
}

export default Social
