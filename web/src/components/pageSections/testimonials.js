
/** @jsx jsx */
import {Link as GatsbyLink} from 'gatsby'
import styled from '@emotion/styled'
import Slider from 'react-slick'

import {jsx, Box, Text, Flex, Link, Card} from 'theme-ui'
import {Section} from '../common'
import SectionTitle from '../molecules/SectionTitle/index'

const SliderStyled = styled(Slider)`
  .slick-slide {
    height:'100%';
    width:'100%'
  }
  .slick-dots {
    position:relative;
    bottom: 24px;
    li {
      font-size: 0;
      width: 20px;
      height: 8px;
      border-radius: 4px;
      background-color: #00788c;
      margin-left: 8px;
      margin-right: 4px;
      transition: 0.5s;
      &.slick-active {
        width: 48px;
        height: 8px;
        border-radius: 4px;
        background-color: #00788c;
    }
      button {
        width: 100%;
        height: 100%;
        &:before {
          content: none;
          
        }
      }
    }
  }
`

const ContentCard = ({key, name, quote, className, ...props}) => (
  <Flex
    key={key}
    p={['0px', '32px']}
    className={`${className}`}
    {...props}
    sx={{
      height: '100%',
      flexDirection: 'column',
      py: '64px',
      justifyContent: 'center',
      alignItems: 'center',
      '&:focus': {
        outline: 'none'
      }
    }}
  >
    <Text py='32px' variant='eyebrow'>
      {name}
    </Text>
    <Text variant='bigBody' color='primary' pb='16px'>
      {quote}
    </Text>

  </Flex>
)

const Testimonials = ({block}) => {
  const {eyebrow, testimonials = []} = block

  const slickSettings = {
    dots: true,
    infinite: true,
    arrows: false,
    draggable: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          adaptiveHeight: true
        }
      }
    ]
  }
  return (
    <Section bg='primaryBg' variant='container.section'>
      <Flex variant='container.wide' sx={{textAlign: 'center', justifyContent: 'center', alignItems: 'center', maxWidth: '960px', width: '100%'}}>
        <Box>
          <SectionTitle heading={eyebrow}>
            <Text
              as='p'
              color='primary'
              sx={{
                pt: '16px',
                maxWidth: '560px',
                fontFamily: 'body',
                letterSpacing: '0.03em',
                fontWeight: '300',
                fontSize: ['18px', '20px']
              }}
            >
              Lestu{' '}
              <Link as={GatsbyLink} variant='textLink' sx={{color: 'primary'}} to='/blogg/Reynslusögur'>
                {' '}
                reynslusögur
              </Link>{' '}
              á blogginu
            </Text>

          </SectionTitle>
          <Card variant='testimonial' sx={{}}>
            <SliderStyled {...slickSettings}>
              {
                testimonials.map((testimonial) => {
                  const {name, _key, quote} = testimonial
                  return (
                    <Box>
                      <ContentCard
                        index={_key}
                        name={name}
                        key={_key}
                        quote={quote}
                      />
                    </Box>
                  )
                })
              }
            </SliderStyled>
          </Card>
        </Box>
      </Flex>

    </Section>

  )
}

export default Testimonials
/* {
  testimonials.map((testimonial) => (
    <Testimonial key={testimonial._key} quote={testimonial.quote} name={testimonial.name} />
  ))
}
 */
