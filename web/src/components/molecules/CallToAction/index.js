/** @jsx jsx */
import React from 'react'
import {jsx, Styled, Box, Grid, Flex} from 'theme-ui'

import TextLink from '../../atoms/TextLink'

const CallToAction = () => {
  return (
    <Box
      as='section'
      variant='container.section'
      alt=''
      sx={{
        backgroundImage: `url()`,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundColor: 'primary',
        maxHeight: '100%'
      }}
    >
      <Box
        bg='white'
        sx={{
          m: '64px',
          width: '100%',
          maxWidth: '1360px',
          boxShadow: '8px 8px 12px rgba(0,0,0, 0.15    )  '
        }}
      >
        <Grid
          columns={[1, null, null, 2]} columnGap={'64px'} rowGap={'32px'}
          sx={{
            px: ['24px', '32px', '64px'],
            py: '64px',
            width: '100%'
          }}
        >
          <Box as='h5' variant='text.eyebrow' sx={{gridColumn: '1 / span2'}}>
            Ókeypis heilsuviðtal.
          </Box>
          <Flex sx={{flexDirection: 'column', justifyContent: 'space-between'}}>
            <Styled.h3 sx={{fontSize: '40px', mb: '64px'}}>
              Ég býð upp á 50 mínútna heilsuviðtal fyrir þá sem vilja bæta heilsuna og kynna sér heilsumarkþjálfun.
            </Styled.h3>
            <Box>
              <TextLink toLink='/blogg' data-text='Hafa samband'>
                Hafa samband
              </TextLink>
            </Box>

          </Flex>
          <Flex as='p' sx={{flexDirection: 'column', alignItems: 'center', pl: '64px'}}>
            <Box as='ul' sx={{}}>
              <Styled.li>Viðtalið er þér að kostnaðarlausu og án allra skuldbindinga. </Styled.li>
              <li>
                Þegar viðtalið hefur verið bókað mun hef ég samband til að ákveða stað og stund fyrir samtalið
                sem fer fram í gegnum netið eða í eigin persónu.
              </li>
              <li>
                Þú færð sendar spurningar tengdar heilsu þinni, lífsstíl og markmiðum sem þú svarar áður en heilsuviðtalið fer fram og sendir mér.
              </li>
              <li>
                Í viðtalinu sjálfu verður farið yfir spurningarnar, markmið og væntingar þínar.
              </li>
              <li>Í framhaldi er svo ákveðið í sameiningu hvort heilsumarkþjálfun með mér sé rétta leiðin fyrir þig.
              </li>

            </Box>
          </Flex>
        </Grid>
      </Box>
    </Box>
  )
}

export default CallToAction

/* <Styled.p sx={{fontWeight: 'light'}}>
              Viðtalið er þér að kostnaðarlausu og án allra skuldbindinga. Þegar viðtalið hefur verið bókað mun hef ég samband til að ákveða stað og stund fyrir samtalið sem fer fram í gegnum netið eða í eigin persónu.
            </Styled.p>
            <Styled.p sx={{fontWeight: 'light'}}>
              Þú færð sendar spurningar tengdar heilsu þinni, lífsstíl og markmiðum sem þú svarar áður en heilsuviðtalið fer fram og sendir mér. Í viðtalinu sjálfu verður farið yfir spurningarnar, markmið og væntingar þínar. Í framhaldi er svo ákveðið í sameiningu hvort heilsumarkþjálfun með mér sé rétta leiðin fyrir þig.
            </Styled.p> */
