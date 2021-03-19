import React from 'react'
import {FaQuoteRight, FaArrowAltCircleRight} from 'react-icons/fa'

import {Link} from 'gatsby'
import styled from '@emotion/styled'
import {getBlogUrl} from '../../lib/helpers'

import {Container, Box, Flex, Card, Text} from 'theme-ui'
import Slider from '../molecules/Slider'

import {Section, Wrapper} from '../common'

const SliderStyled = styled(Slider)`
  position: relative;
  .slick-arrow {
    position: absolute;
    top: 50%;
    font-size: 0;
    height: 65px;
    display: flex;
    width: 65px;
    background: black;
    transition: 0.4s;
    border-radius: 500px;
    transform: translate(-50%, -50%);
    z-index: 999;
    margin-top: -20px;
    &::before {
      position: absolute;
      content: "";
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      font-size: 20px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      transition: 0.4s;
    }
  }
  .slick-arrow.slick-prev {
    left: 0;
    &:before {
      content: "\f060";
    }
  }

  .slick-arrow.slick-next {
    right: 0;
    left: auto;
    transform: translate(50%, -50%);
  }

  .slick-arrow:hover,
  .slick-arrow:focus {
    background: yellow;
    color: red;
    &:before {
      color: green;
    }
  }
`

const Testimonials = ({block}) => {
  const {eyebrow, heading, testimonials = []} = block

  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: '1200px',
        settings: {
          arrows: false
        }
      }
    ]
  }

  return (
    <Section>
      <Wrapper variant='container.wide'
      >
        <Flex variant='container.flex'>
          <Text as='h5' variant='eyebrow'>{eyebrow}</Text>
          <Text as='h3' variant='subheading' mb={4}> {heading}</Text>
        </Flex>
        <Flex sx={{justifyContent: 'center', m: 3}}>
          <SliderStyled {...slickSettings}>
            {
              testimonials.map(testimonial => (
                <Box
                  sx={{
                    m: '0 auto',
                    '&:focus': {
                      outline: 'none'
                    }
                  }}>
                  <Card
                    variant='testimonial'
                    key={testimonial._key}
                    sx={{
                      p: 4,
                      maxWidth: '560px'

                    }}
                  >
                    <Flex sx={{flexDirection: 'column', minHeight: '320px', width: '100%', justifyContent: 'space-between', alignItems: 'center'
                    }}>
                      <FaQuoteRight color='#ff7d73' fontSize='48px'
                      />
                      <Box >
                        <Text>{testimonial.quote}</Text>
                      </Box>
                      <Text>{testimonial.name}</Text>
                    </Flex>
                  </Card>
                </Box>
              ))
            }
          </SliderStyled>

        </Flex>
        <Flex variant='container.flex'><Link to={'/blogg/Reynslusögur'}>Lesa reynslusögur</Link></Flex>

      </Wrapper>
    </Section>
  )
}

export default Testimonials
