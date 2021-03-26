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
    <Flex
      sx={{
        flexDirection: 'row',
        columnGap: '16px',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {socialPlatforms.map((platform, index) => {
        return (
          <SocialIcon
            name={platform.name}
            url={platform.url}
            style={{color: 'primaryBg', fontSize: [5]}}
            key={index}
          />
        )
      })}
    </Flex>
  )
}

export default Social
