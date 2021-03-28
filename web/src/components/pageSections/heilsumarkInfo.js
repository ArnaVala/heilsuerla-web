import React, {useState} from 'react'
import styled from '@emotion/styled'
import {FiArrowRightCircle} from 'react-icons/fi'

import {jsx, Flex, Box, Text, Button, Grid} from 'theme-ui'
import {Section, Wrapper} from '../common'
import {SectionTitle} from '../molecules'
import TextLink from '../atoms/TextLink'

const ButtonGroup = styled(Box)`
  .btn {
    border-radius: 4px 0 0 4px;
    font-family: 'Sofia Pro';
    letter-spacing: 0.05em;
    height: 64px;
    margin: 16px;
    padding: 8px;
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
  background: none;
  font-family: 'Sofia Pro';
  height: '32px';
`
const Tab = styled(Button)`
  border: none;
  font-family:'Sofia Pro';
  outline: none;
  min-width: 96px;
  cursor: pointer;
  position: relative;
  font-size: 16px;
  border-radius: 0;
  color: '#cde3e7';
  color: ${(props) => (props.active ? '#003c51' : '')};
  background-color: ${(props) => (props.active ? '#ffd6d6' : '')};
  transition: background-color 0.4s ease-in-out;

  :hover {
    background-color: '#fe7576';
    color: '#fe7576';
    border-bottom: ${(props) => (props.active ? 'none' : '')}

  }
`
const Content = styled(Box)`
  ${(props) => (props.active ? '' : 'display:none')};
  text-align: center;
`

const HeilsumarkInfo = ({block, raw}) => {
  const {heading, description, includedTab, pricingTab, stepsTab} = block
  const [active, setActive] = useState(0)
  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0)
    if (index !== active) {
      setActive(index)
    }
  }

  return (
    <Section as='section' bg='primary'>
      <Wrapper variant='container.wide'>
        <Flex
          variant='container.column'
          pb='64px'
          sx={{width: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}
        >
          {heading && (
            <Text
              as='h2'
              variant='sectionTitle'
              color='primaryBg'
              sx={{
                fontWeight: '300',
                maxWidth: '640px'
              }}
            >
              {heading}
            </Text>
          )}
          <Box sx={{height: '2px', mb: '24px', bg: 'accent', width: '128px'}} />
          {description && (
            <Text
              as='p'
              color='primaryBg'
              sx={{maxWidth: '560px', fontFamily: 'heading', fontSize: ['20px'], fontWeight: '300', letterSpacing: '0.03em'}}
            >
              {description}
            </Text>
          )}
        </Flex>

        <Flex
          sx={{
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            margin: '0 auto',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '1280px',
            mt: '32px'
          }}
        >

          <Tabs
            sx={{
              borderBottom: '1px solid',
              borderColor: 'primaryBg',
              width: '100%',
              px: '0px'
            }}>
            <Tab onClick={handleClick} active={active === 0} id={0}>
              {stepsTab.tabTitle}
            </Tab>
            <Tab onClick={handleClick} active={active === 1} id={1}>
              {
                pricingTab.tabTitle
              }

            </Tab>
            <Tab onClick={handleClick} active={active === 2} id={2}>
              {
                includedTab.tabTitle
              }

            </Tab>
          </Tabs>
          <Content
            active={active === 0}
            sx={{px: ['16px', '32px', '64px'], pb: '64px', m: '0 auto'}}>
            <Flex
              variant='container.column'
              py='64px'
              sx={{
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text color='primaryBg' sx={{maxWidth: '560px', fontFamily: 'heading', fontSize: '24px', fontWeight: '300'}}>{stepsTab.description}</Text>
            </Flex>
            <Grid columns={[1, 2, null, 4]} sx={{justifyContent: 'center'}}>
              {stepsTab.stepsList.map((item) => {
                const {heading, description, number} = item
                return (
                  <Grid columns={1} key={item._key}>
                    <Flex variant='container.column' sx={{justifyContent: 'start', alignItems: 'center', px: '16px'}}>
                      <Box bg='accent' my='16px' sx={{height: '48px', width: '48px', borderRadius: '50%'}}>
                        <Text color='' sx={{fontFamily: 'body', fontSize: '40px', lineHeight: '52px'}}>{number}</Text>
                      </Box>
                      <Text as='h4' color='primaryBg' variant='subheading' sx={{fontSize: '24px', fontWeight: '300', pt: '8px', pb: '4px', lineHeight: 'heading'}}>
                        {heading}
                      </Text>
                      <Text color='primaryBg' as='p' sx={{fontSize: '16px', letterSpacing: '0.02em', fontWeight: '300'
                      }}>
                        {description}
                      </Text>
                    </Flex>
                  </Grid>
                )
              })}
            </Grid>
            <Flex sx={{width: '100%', justifyContent: 'center', alignItems: 'center', mt: '64px'}}>
              <TextLink toLink='/hafa-samband' data-text='bóka heilsuviðtal'>
                Bóka heilsuviðtal
              </TextLink>
            </Flex>

          </Content>
          <Content active={active === 1} sx={{width: '100%', px: ['16px', '32px', '64px'], pb: '64px', m: '0 auto'}}>
            <Flex variant='container.column' py='64px' sx={{justifyContent: 'center', alignItems: 'center'}}>
              <Text color='primaryBg' variant='bigBody' sx={{fontWeight: '300'}}>
                {pricingTab.description}
              </Text>
            </Flex>
            <Flex variant='container.row' >
              {pricingTab.prices.map((item) => {
                const {plan, amount, payment, info} = item
                return (
                  <Flex mx='16px' key={item._key} bg='primaryBg' variant='container.column'
                    sx={{flexBasis: '100%', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Box bg='accent' sx={{px: '32px', width: '100%', alignSelf: 'flex-center'}}>
                      <Text as='h4' color='white' variant='eyebrow' sx={{py: '16px'}}>
                        {plan}
                      </Text>
                    </Box>
                    <Flex sx={{height: '180px', flexDirection: 'column', justifyContent: 'center'}}>
                      <Text as='p' sx={{fontSize: '32px', fontWeight: '600'}}>
                        {amount}{' '}
                      </Text>
                      <Text as='p' sx={{fontSize: '16px'}}>
                        {payment}{' '}
                      </Text>
                    </Flex>
                    <Box bg='primaryMuted' sx={{width: '100%', alignSelf: 'center', py: '16px'}}>
                      <Text as='p' sx={{fontSize: '16px'}}>
                        {info}
                      </Text>
                    </Box>

                  </Flex>
                )
              })}
            </Flex>
          </Content>
          <Content
            active={active === 2}
            sx={{px: ['16px', '32px', '64px'], pb: '64px', m: '0 auto'}}
          >
            <Flex variant='container.column' pt='64px' pb='32px' sx={{justifyContent: 'center', alignItems: 'center'}}>
              <Text color='primaryBg' variant='bigBody' sx={{fontWeight: '300'}}>
                {includedTab.description}
              </Text>
            </Flex>
            <Flex variant='container.column' sx={{justifyContent: 'center'}}>
              <Grid columns={[1, 2, null, 3]} sx={{px: ['16px', '32px', null], m: '0 auto'}}>
                {includedTab.includedList.map((item) => {
                  const {heading, description} = item
                  return (
                    <Grid
                      columns={'24px 1fr'}
                      gap='16px'
                      key={item._key}
                    >
                      <Flex sx={{justifyContent: 'center'}}>
                        <FiArrowRightCircle color='#ff7476' fontSize='24px' />
                      </Flex>
                      <Flex variant='container.column' sx={{textAlign: 'left'}}>
                        <Text color='primaryBg' variant='bigBody' sx={{fontWeight: '400', lineHeight: 'body', pb: '8px'}}>
                          {heading}
                        </Text>
                        <Text color='primaryBg' as='p' sx={{fontSize: '16px', letterSpacing: '0.02em', fontWeight: '300'
                        }}>
                          {description}
                        </Text>
                      </Flex>
                    </Grid>
                  )
                })}
              </Grid>
            </Flex>
          </Content>

        </Flex>
      </Wrapper>
    </Section>
  )
}

export default HeilsumarkInfo
