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
        flexDirection: ['column'],
        justifyContent: 'center',
        alignItems: 'center',
        pt: '32px'
      }}
    >
      <Box
        variant='text.caps'
        sx={{
          fontWeight: 'light',
          fontSize: '14px',
          color: 'accent',
          mb: '8px'
          /* ':after': {
            content: '""',
            display: 'inline-block',
            width: '2px',
            height: '16px',
            backgroundColor: 'accent',
            color: 'accent',
            verticalAlign: '-2px',
            ml: '16px'
          } */
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
              style={{color: 'primary', fontSize: [4, 5]}}
              key={index}
            />
          )
        })}
      </Flex>
    </Flex>
  )
}

export default Share
