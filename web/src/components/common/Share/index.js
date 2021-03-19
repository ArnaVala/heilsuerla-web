import React from 'react'
import {jsx, Box, Flex} from 'theme-ui'
import SocialIcon from '../../atoms/icon/socialIcons'
import {FiShare2} from 'react-icons/fi'

const Share = ({postURL, postTitle, ...props}) => {
  const sharePlatforms = [
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${postURL}`
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?text=${postTitle}&url=${postURL}`
    },

    {
      name: 'WhatsApp',
      url: `https://wa.me/?text=${encodeURIComponent(`${postTitle} ${postURL}`)}`
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
      <Box
        variant='text.caps'
        sx={{
          fontWeight: 'light',
          mb: '8px',
          ':after': {
            content: '""',
            display: 'inline-block',
            width: '120px',
            height: '2px',
            backgroundColor: 'accent',
            color: 'accent',
            verticalAlign: '4px',
            ml: '8px'
          }
        }}
      >
        Deildu
      </Box>
      <Flex sx={{columnGap: '16px'}}>
        {sharePlatforms.map((platform, index) => {
          return (
            <SocialIcon
              name={platform.name}
              url={platform.url}
              style={{color: 'primary', fontSize: [4]}}
              key={index}
            />
          )
        })}
      </Flex>
    </Flex>
  )
}

export default Share
