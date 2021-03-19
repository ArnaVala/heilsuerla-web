/** @jsx jsx */
import {jsx, Box, Flex, Grid} from 'theme-ui'
import image from 'gatsby-image'

import '../../styles/global.css'

import {Section, Wrapper, Title, Desc, Card} from '../common'
import HeadlineAndText from '../molecules/headlineAndText'

const content =
  {
    title: 'Hvað er heilsumarkþjálfun?',
    description:
      'Heilsumarkþjálfun er í stuttu máli heildræn nálgun í átt að heilbrigði líkama og sálar sem hægt er að ná með einstaklingsmiðuðum og raunhæfum markmiðum sem unnin eru í samvinnu við Erlu og með stuðningi hennar frá upphafi til enda.',
    items: [
      {
        index: '1',
        heading: 'Heildræn nálgun á heilsu',
        text: 'Heilsumarkþjálfun snýst um þá hugmynd að heildræn nálgun sé besta leiðin til að njóta góðrar heilsu, það er að huga að heilbrigði bæði líkama og sálar, hvort sem það varðar mataræði eða annað.'
      },
      {
        index: '2',
        heading: 'Frumnæring og næring',
        text: 'Í heilsumarkþjálfun er næringu skipt í frumnæringu (primary nutrition) og mat sem næringu (secondary nutrition). Frumnæring hefur áhrif á líf okkar og heilsu og til hennar teljast t.d. svefn, hreyfing, sambönd við okkar nánustu, félagsleg samskipti, starfsframi, almenn gleði og andleg næring.'
      },
      {
        index: '3',
        heading: 'Langvarandi lausnir og árangur',
        text: 'Markmiðið með heilsumarkþjálfun er að finna langvarandi lausn og raunhæfan lífsstíl sem hentar hverjum og einum til frambúðar. Skyndilausnir og kúrar munu heyra sögunni til þegar heilsuvegferð með Erlu hefst og hér snýst verkefnið um samvinnu þar sem þið vinnið saman að því að ná heilsumarkmiðum þínum, hver sem þau eru. '
      }
    ]
  }

const AboutContent = ({title, description, items = []
}) => {
  return (
    <Section>
      <Wrapper variant='container.inner' >
        <HeadlineAndText heading={content.title} description={content.description} />
        <Grid gap='32px' columns={[1, null, 3]}>
          {
            content.items.map((item) => {
              const {index, heading, text} = item
              return (
                <Box>
                  <Flex as='li' sx={{flexDirection: 'column'}} key={index}>
                    <Title variant='text.heading' sx={{mb: '16px'}}>{heading}</Title>
                    <Desc color='primaryLight' >{text}</Desc>
                  </Flex>
                </Box>
              )
            })
          }

        </Grid>

      </Wrapper>
    </Section>
  )
}

export default AboutContent
