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
    <Section bg='primaryBg'>
      <Wrapper variant='container.wide' sx={{m: '0 auto'}} >
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

              <Box sx={{display: 'relative'}} >
                <Card
                  variant='testimonial'
                  key={testimonial._key}
                >
                  <Flex sx={{flexDirection: 'column', minHeight: '320px', width: '100%', justifyContent: 'space-between', alignItems: 'center'
                  }}>
                    <FaQuoteRight color='primaryLight' fontSize='96px'
                    />
                    <Box>
                      <Text variant='cards.testimonial.quote'>{testimonial.quote}</Text>
                    </Box>
                    <Text>{testimonial.name}</Text>
                  </Flex>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
        <Flex variant='container.flex'><Link to={'/blogg/Reynslusögur'}>Lesa reynslusögur</Link></Flex>

      </Wrapper>
    </Section>
  )
}

export default Testimonials
