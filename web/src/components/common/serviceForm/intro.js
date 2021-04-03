import React from 'react'
import {Box, Grid, Flex, Text} from 'theme-ui'
import {FiArrowRightCircle} from 'react-icons/fi'

const Intro = () => (
  <Flex as='ul' sx={{m: '0px', p: '0', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <Text as='p' color='primaryBg' variant='bigBody'>
      Ég býð upp á 50 mínútna heilsuviðtal fyrir þá sem vilja bæta heilsuna og kynna sér
      heilsumarkþjálfun. Viðtalið er þér að kostnaðarlausu og án allra skuldbindinga.
    </Text>

  </Flex>
)

export default Intro
