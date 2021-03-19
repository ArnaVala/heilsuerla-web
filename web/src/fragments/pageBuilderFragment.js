import {graphql} from 'gatsby'

export const query = graphql`
  fragment PageBuilder on SanityPage {
    _rawPageBuilder(resolveReferences: {maxDepth: 10})
    pageBuilder {
      ... on SanityAboutIntro {
        _key
        _type
        eyebrow
        heading
        image {
          alt
          ... SanityImage
        }
      }
      ... on SanityAboutStory {
        _key
        _type
        heading
        image {
          alt
          ... SanityImage
        }
        blockImageDirectionLeft
      }
      ... on SanityDivider {
        _key
        _type
        backgroundImage {
          alt
          ... SanityImage
        }
      }
      ... on SanityHeilsumarkContent {
        _key
        _type
        heading
        description
        image {
          alt
          ... SanityImage
        }
        bigTextOne
        bigTextTwo
        bigTextThree
        listLeft {
          _key
          _type
          image {
            ... SanityImage
            alt
          }
          listWithIcon
        }
        listRight {
          _key
          _type
          image {
            ... SanityImage
            alt
          }
          listWithIcon 
        }
        illustration {
          alt
          ... SanityImage
        }
      }
      ... on SanityHeilsumarkIntro {
        _key
        _type
        heading
        description
        image {
          alt
          ... SanityImage
        }
        serviceList {
          _key
          _type
          name
          description
        }

      }
      ... on SanityHero {
        _key
        _type
        eyebrow
        heading
        ctaLink {
          linkText
          url
        }
        image {
          alt
          ... SanityImage
        }
      }
      ... on SanityImageTextList {
        _key
        _type
        heading
        image {
          ...SanityImage
          alt
        }
        serviceList {
          _key
          _type
          name
          description
        }
      }
      ... on SanityImageTextListWithIcon {
        _key
        _type
        image {
          ...SanityImage
          alt
        }
        listWithIcon
      }
      ... on SanityQuoteBanner {
        _key
        _type
        quote
        quoted
        backgroundImage {
          ...SanityImage
          alt
        }
      }
      ... on SanityTestimonials {
        _key
        _type
        eyebrow
        heading
        testimonials {
          _key
          _type
          name
          quote
          articleLink {
            _key
            _type
            articleUrl {
              slug {
                current
              }
            }
          }
        }
      }
      ... on SanityTextDivider {
        _key
        _type
        text
        backgroundImage {
          ...SanityImage
          alt
        }
      }
      ... on SanityTextHeader {
        _key
        _type
        eyebrow
        heading
        backgroundImage {
          ...SanityImage
          alt
        }
      }
      ... on SanityTextImageBlock {
        _key
        _type
        heading
        image {
          alt
          ... SanityImage
        }
        blockImageDirectionLeft
      }
    }
  }
`
/*
      ... on SanityIntro {
        _key
        _type
        eyebrow
        heading
        image {
          alt
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      ... on SanityHeadingWithList {
        _key
        _type
        heading
        listBlockList {
          _key
          _type
          listBlockText
        }
      }
      ... on SanityServiceFeature {
        _key
        _type
        eyebrow
        heading
        blockImageDirectionLeft
        ctaLink {
          linkText
          url
        }
        image {
          alt
          ...SanityImage
        }
      }
      ... on SanityTestimonials {
        _key
        _type
        eyebrow
        heading
        testimonialRef {
          _key
          _type
          _id
          quote
          name
        }
      }

... on SanityFeature {
        _key
        _type
        heading
        list {
          _key
          _type
          listText
        }
      }
      ... on SanityHero {
        _key
        _type
        introBlock {
          _key
          _type
          eyebrow
          heading
        }
        ctaLink {
          _key
          _type
          linkText
          url
        }
        backgroundImage {
          ...SanityImage
          alt
        }
        image {
          ...SanityImage
            alt
        }
      }
      ... on SanityIntro {
        _key
        _type
        introBlock {
          _key
          _type
          eyebrow
          heading
        }
        image {
          ...SanityImage
            alt
        }
      }
      ... on SanityQuoteBanner {
        _key
        _type
        quote
        ref
      }
      ... on SanitySectionHead {
        _key
        _type
        eyebrow
        heading
      }
      ... on SanityServiceFeature {
        _key
        _type
        introBlock {
          _key
          _type
          eyebrow
          heading
        }
        ctaLink {
          _key
          _type
          linkText
          url
        }
        image {
          ...SanityImage
            alt
        }
        reversed
      }

      ... on SanityTextWithImage {
        _key
        _type
        heading
        reversed
        image {
          ...SanityImage
            alt
        }

      } */
