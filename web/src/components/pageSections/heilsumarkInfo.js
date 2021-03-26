import React, {useState} from 'react'
import styled from '@emotion/styled'
import {FiArrowRightCircle} from 'react-icons/fi'

import {jsx, Flex, Box, Text, Button, Card, Grid} from 'theme-ui'
import {Section, Wrapper} from '../common'
import {SectionTitle} from '../molecules'

const ButtonGroup = styled(Box)`
  .btn {
    border-radius: 4px 0 0 4px;
    font-family: 'Sofia Pro';
    letter-spacing: 0.05em;
    height: 64px;
    margin: 16px;
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
  font-family: 'Sofia Pro';
  height: '64px';
`
const Tab = styled(Button)`
  border: none;
  font-family:'Sofia Pro';
  font-size: '18px';
  outline: none;
  min-width: 120px;
  cursor: pointer;
  position: relative;
  font-size: 16px;
  border-radius: 0;
  color: '#cde3e7';
  color: ${(props) => (props.active ? '#003c51' : '')};
  background-color: ${(props) => (props.active ? '#cde3e7' : '')};
  border-bottom: ${(props) => (props.active ? 'primary' : '')};
  transition: background-color 0.4s ease-in-out;

  :hover {
    background-color: #cde3e7;
    color: '#003c51';
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
              variant='sectionTitle'
              color='primaryBg'
              sx={{
                maxWidth: '640px',
                fontWeight: '300'
              }}
            >
              {heading}
            </Text>
          )}
          <Box sx={{height: '2px', mt: '16px', mb: '16px', bg: 'accent', width: '128px'}} />
          {description && (
            <Text as='p' variant='bigBody' sx={{maxWidth: '560px'}}>
              {description}
            </Text>
          )}
        </Flex>

        <Box>
          <Flex
            sx={{
              flexDirection: 'column',
              width: '100%',
              height: '100%',
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >

            <Tabs sx={{borderBottom: '1px solid white'
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
              <Flex variant='container.column' py='64px' sx={{justifyContent: 'center', alignItems: 'center'}}>
                <Text color='primaryBg' variant='subheading' sx={{maxWidth: '560px', fontWeight: '300'}}>{stepsTab.description}</Text>
              </Flex>
              <Grid columns={[1, 2, 3]}sx={{justifyContent: 'center'}}>
                {stepsTab.stepsList.map((item) => {
                  const {heading, description} = item
                  return (
                    <Grid columns={1} key={item._key}>
                      <Flex variant='container.column' sx={{justifyContent: 'start', alignItems: 'center'}}>
                        <Box bg='accent' my='16px' sx={{height: '48px', width: '48px', borderRadius: '50%'}}>
                          <Text color='' sx={{fontFamily: 'body', fontSize: '40px', lineHeight: '52px'}}>3</Text>
                        </Box>
                        <Text color='primaryBg' variant='subheading' sx={{fontWeight: '300', pb: '8px'}}>
                          {heading}
                        </Text>
                        <Text color='primaryBg' as='p' sx={{fontSize: '16px'}}>
                          {description}
                        </Text>
                      </Flex>

                    </Grid>
                  )
                })}
              </Grid>
            </Content>
            <Content active={active === 1} sx={{px: ['16px', '32px', '64px'], pb: '64px', m: '0 auto'}}>
              <Flex variant='container.column' py='64px' sx={{justifyContent: 'center', alignItems: 'center'}}>
                <Text color='primaryBg' variant='subheading' sx={{maxWidth: '560px', fontWeight: '300'}}>
                  {pricingTab.description}
                </Text>
              </Flex>
              <Grid columns={[1, 2]} sx={{justifyContent: 'center'}}>
                {pricingTab.prices.map((item) => {
                  const {plan, amount, payment, info} = item
                  return (
                    <Grid columns={1} key={item._key}>
                      <Flex variant='container.column' sx={{justifyContent: 'start', alignItems: 'center'}}>
                        <Card variant='default' bg='primaryMuted' sx={{width: '100%', height: '100%'}}>
                          <Text as='h4' variant='eyebrow' pb='16px' sx={{}}>
                            {plan}
                          </Text>
                          <Text as='p' sx={{fontSize: '32px', fontWeight: 'bold'}}>
                            {amount}{' '}
                          </Text>
                          <Text as='p' sx={{fontSize: '16px'}}>
                            {payment}{' '}
                          </Text>
                          <Text as='p' sx={{fontSize: '16px'}}>
                            {info}
                          </Text>
                        </Card>
                      </Flex>
                    </Grid>
                  )
                })}
              </Grid>
            </Content>
            <Content
              active={active === 2}
              sx={{px: ['16px', '32px', '64px'], pb: '64px', m: '0 auto'}}
            >
              <Flex variant='container.column' py='64px' sx={{justifyContent: 'center', alignItems: 'center'}}>
                <Text color='primaryBg' variant='subheading' sx={{maxWidth: '560px', fontWeight: '300'}}>
                  {includedTab.description}
                </Text>
              </Flex>
              <Flex variant='container.column' sx={{justifyContent: 'center'}}>
                <Grid columns={[1, 2, null, null]} sx={{py: ['32px', '48px', '64px'], px: ['16px', '32px', null], m: '0 auto'}}>
                  {includedTab.includedList.map((item) => {
                    const {heading, description} = item
                    return (
                      <Grid
                        columns={'24px 1fr'}
                        key={item._key}
                      >
                        <Flex sx={{justifyContent: 'center', mr: '-24px'}}>
                          <FiArrowRightCircle color='#ff7476' fontSize='24px' />
                        </Flex>
                        <Flex variant='container.column' sx={{textAlign: 'left'}}>
                          <Text color='primaryBg' variant='bigBody' sx={{fontWeight: '600', lineHeight: 'heading', pb: '8px'}}>
                            {heading}
                          </Text>
                          <Text color='primaryBg' as='p' sx={{fontSize: '16px'}}>
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
        </Box>
      </Wrapper>
    </Section>
  )
}

export default HeilsumarkInfo
