import React from 'react'
import {Box, Grid, Flex, Text} from 'theme-ui'
import {FiArrowRightCircle} from 'react-icons/fi'
import Details from './details'

const Intro = () => (
  <Flex as='ul' sx={{m: '0px', p: '0', height: '100%', flexDirection: 'column', justifyContent: 'flex-start'}}>
    <Text as='h4' sx={{fontSize: '24px', pb: '32px'}}>
      Fyrirkomulag
    </Text>
    <Flex sx={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
      <Box sx={{height: '32px', minWidth: '40px'}}>
        <FiArrowRightCircle color='#ff7476' fontSize='24px' />
      </Box>
      <Text variant='body' sx={{}}>
        Þú færð sendar spurningar tengdar heilsu þinni, lífsstíl og markmiðum sem þú svarar áður en heilsuviðtalið fer fram og sendir mér.
      </Text>
    </Flex>
    <Flex sx={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
      <Box sx={{height: '32px', minWidth: '40px'}}>
        <FiArrowRightCircle color='#ff7476' fontSize='24px' />
      </Box>
      <Text variant='body'>
        Þegar viðtalið hefur verið bókað mun hef ég samband til að ákveða stað og stund fyrir samtalið
        sem fer fram í gegnum netið eða í eigin persónu.
      </Text>
    </Flex>
    <Flex sx={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
      <Box sx={{height: '32px', minWidth: '40px'}}>
        <FiArrowRightCircle color='#ff7476' fontSize='24px' />
      </Box>
      <Text variant='body' sx={{}}>
        Í viðtalinu sjálfu verður farið yfir spurningarnar, markmið og væntingar þínar. Í framhaldi er svo ákveðið í sameiningu hvort heilsumarkþjálfun með mér sé rétta leiðin fyrir þig.
      </Text>
    </Flex>
  </Flex>
)

export default Intro
