import {graphql} from 'gatsby'
import {Text} from 'theme-ui'

export const query = graphql`
  fragment SanityAbout on SanityAuthor {
    _rawBio(resolveReferences: {maxDepth: 10})
    name
    _key
    _type
    _rawAboutIntro
    aboutIntro {
      _type
      _key
      heading
      eyebrow
      image {
        alt
        ...SanityImage
      }
    }
    image {
      alt
      ...SanityImage
    }
    
  }
`
