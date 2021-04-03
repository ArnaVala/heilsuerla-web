/** @jsx jsx */
import {jsx, Box, Flex} from 'theme-ui'
import {Facebook, Twitter, Linkedin, Mail} from 'react-feather'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton
} from 'react-share'

const ShareButtons = ({url, title, description}) => {
  const twitterHandle = 'heilsuerla'

  return (
    <Flex className='post-meta-share-icons' sx={{justifyContent: 'center', alignItems: 'center', width: '100%', 'svg': {mx: '8px'}}}>
      <FacebookShareButton url={url} >
        <Facebook strokeWidth={1.25} />
      </FacebookShareButton>

      <LinkedinShareButton url={url}>
        <Linkedin strokeWidth={1.25} />
      </LinkedinShareButton>

      <TwitterShareButton url={url} via={twitterHandle}>
        <Twitter strokeWidth={1.25} />
      </TwitterShareButton>

      <EmailShareButton url={url} title={title} description={description}>
        <Mail strokeWidth={1.25} />
      </EmailShareButton>
    </Flex>
  )
}

export default ShareButtons
