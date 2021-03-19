/** @jsx jsx */
import React, {useState} from 'react'
import styled from '@emotion/styled'
import {jsx, Flex, Box, Button} from 'theme-ui'

const ButtonGroup = styled(Box)`
  
  .btn {
    border-radius: 4px 0 0 4px;
    font-family: 'Sofia Pro';
    letter-spacing: 0.05em;
    height: 64px;
    margin:16px;
    padding: 16px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: blue;
    font-size: 16px;
    font-weight: 700;
    color: black;
    &.active {
      background-color: blue;
      color: #fff;
    }
    & + .btn {
      border-radius: 0 4px 4px 0;
    }
  }
`

const Tabs = styled(Box)`
  overflow: hidden;
  background: white;
  font-family: 'Sofia Pro',;
  height: '64px',;
  
`
const Tab = styled(Button)`
  border: none;
  outline: none;
  min-width: 120px;
  cursor: pointer;
  position: relative;
  font-size: 16px;
  border-radius: 0;
  color: black;
  border: ${props => (props.active ? '1px solid black' : '')};
  border-bottom: ${props => (props.active ? 'none' : '')};
  background-color: ${props => (props.active ? 'white' : '#f3f3f3')};
  transition: background-color 0.4s ease-in-out;

  :hover {
    background-color: white;
  }
`
const Content = styled(Box)`
  ${props => (props.active ? '' : 'display:none')};
   border-radius: 4px;
  text-align: center;
  
 
`

const PricingSection = () => {
  const [active, setActive] = useState(0)
  const handleClick = e => {
    const index = parseInt(e.target.id, 0)
    if (index !== active) {
      setActive(index)
    }
  }

  return (
    <Box as='section' bg='primary' variant='container.section' sx={{p: '0px', mt: '96px'}}>
      <Flex bg='#f3f0ee'
        sx={{flexDirection: 'column', width: '100%', textAlign: 'center', pb: '128px', mx: '0px', justifyContent: 'center', alignItems: 'center'}}>
        <Box
          color='primary'
          sx={{
            maxWidth: '600px',
            fontFamily: 'heading',
            fontWeight: '5',
            fontSize: '40px',
            lineHeight: '1.25',
            width: '100%',
            my: '128px',
            py: '32px',
            borderTop: '2px solid',
            borderBottom: '2px solid',
            borderColor: 'accent'

          }}
        >
          Ef þú hefur ekki tíma fyrir heilsuna í dag mun hún ekki hafa tíma fyrir þig í framtíðinni.
        </Box>
      </Flex>

      <Box bg='#f3f0ee' sx={{width: '100%', pt: '96px', mx: ['16px', '32px', null, '64px'], mt: '-254px'}}>
        <Flex sx={{flexDirection: 'column', width: '100%', height: '100%', textAlign: 'center', mb: '32px', justifyContent: 'center', alignItems: 'center'}}>
          <Box as='h5' variant='text.eyebrow'>
            Fyrirkomulag
          </Box>

          <Box as='h3' sx={{fontFamily: 'heading', fontWeight: '500', pb: '64px'}}>Þitt heilsuferðalag hefst hérna</Box>

          <Tabs>
            <Tab onClick={handleClick} active={active === 0} id={0}>
              Verð
            </Tab>
            <Tab onClick={handleClick} active={active === 1} id={1}>
              Content2
            </Tab>
            <Tab onClick={handleClick} active={active === 2} id={2}>
              Content2
            </Tab>

          </Tabs>
          <>
            <Content active={active === 0} sx={{pt: '64px'}}>
              <Box variant='text.eyebrow'>innifalið</Box>

              <ul>
                <li>10 Website</li>
                <li>15 GB Hosting</li>
                <li>Premium Support</li>
              </ul>
              <Box sx={{mt: '32px'}} />
            </Content>
            <Content active={active === 1}>
              <span variant='text.eyebrow'>6 mánaða heilsumarkþjálfun</span>

              <ul>
                <li>10 Website</li>
                <li>15 GB Hosting</li>
                <li>Premium Support</li>
              </ul>
              <Box sx={{mt: '32px'}} />
            </Content>
            <Content active={active === 2}>
              <h2 variant='text.eyebrow'>Bóka heilsuviðtal</h2>

            </Content>

          </>
        </Flex>
      </Box>
    </Box>
  )
}

export default PricingSection
