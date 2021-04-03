import React from 'react'
import {jsx, Box, Flex} from 'theme-ui'
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
    <Box
      {...props}
    >
      {socialPlatforms.map((platform, index) => {
        return (
          <SocialIcon
            name={platform.name}
            url={platform.url}
            style={{mr: '16px', color: 'primaryLight'}}
            key={index}
          />
        )
      })}
    </Box>
  )
}

export default Social
