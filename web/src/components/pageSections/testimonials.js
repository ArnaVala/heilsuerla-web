import React from 'react'
import {FaQuoteRight, FaArrowAltCircleRight} from 'react-icons/fa'

import {Link} from 'gatsby'
import styled from '@emotion/styled'
import {getBlogUrl} from '../../lib/helpers'

import {Container, Box, Flex, Card, Text} from 'theme-ui'
import Slider from '../molecules/Slider'

import {Section, Wrapper} from '../common'

const Testimonials = ({block}) => {
  const {eyebrow, heading, testimonials = []} = block

  const settings = {
    dots: true,
    dotsWithLabel: true,
    dotsLabel: 'Umsögn',
    arrows: false,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <Section bg='primaryBg' variant='container.section'>
      <Wrapper variant='container.narrow' sx={{m: '0 auto'}} >
        <Box
          sx={{
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            py: ['16px'],
            px: ['16px'],
            m: '0 auto'
          }}
        >
          <Text variant='eyebrow' sx={{mb: '32px'}}>
            {eyebrow}
          </Text>
          <Text variant='subtitle' sx={{mb: '32px'}}>
            {heading}
          </Text>
        </Box>
        <Box>
          <Slider {...settings}>
            { testimonials.map(testimonial => (
              <Box>
                <Card
                  variant='testimonial'
                  key={testimonial._key}
                >
                  <Flex sx={{flexDirection: 'column', minHeight: '320px', width: '100%', justifyContent: 'space-between', alignItems: 'center'
                  }}>
                    <FaQuoteRight color='primaryLight' fontSize='32px'
                    />
                    <Box>
                      <Text variant='quote' sx={{fontSize: '24px'}}>{testimonial.quote}</Text>
                    </Box>
                    <Text>{testimonial.name}</Text>
                  </Flex>
                </Card>
              </Box>
            ))}

          </Slider>
          <Flex sx={{mt: '-48px', justifyContent: 'center', alignItems: 'center', fontSize: '18px', color: 'primaryLight'}}>
            <Link as='a' to='/blogg/reynslusögur'>
              Skoða reynslusögur á blogginu
            </Link>

          </Flex>
        </Box>

      </Wrapper>
    </Section>
  )
}

export default Testimonials
