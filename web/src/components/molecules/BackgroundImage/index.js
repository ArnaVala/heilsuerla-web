/** @jsx jsx */
import {imageUrlFor} from '../../../lib/image-url'
import {buildImageObj} from '../../../lib/helpers'

import {jsx, Flex} from 'theme-ui'

const BackgroundImage = ({image, width, children, ...props}) => {
  return (
    <Flex
      {...props}
      {...image}
      alt={image.alt}
      sx={{
        backgroundImage: `url(${imageUrlFor(buildImageObj(image))
          .maxWidth(width)
          .height(Math.floor((9 / 16) * width))
          .fit('crop')
          .auto('format')
          .url()}
            )`,
        objectFit: 'cover'
      }}
    >
      {children}
    </Flex>
  )
}
export default BackgroundImage
