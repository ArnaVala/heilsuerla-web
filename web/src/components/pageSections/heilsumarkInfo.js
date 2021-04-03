import React, {useState} from 'react'
import styled from '@emotion/styled'
import {FiArrowRightCircle} from 'react-icons/fi'

import {jsx, Flex, Box, Text, Button, Grid, Card} from 'theme-ui'
import {Section, Wrapper} from '../common'
import {SectionTitle} from '../molecules'
import TextLink from '../atoms/TextLink'

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
  cursor: pointer;
  position: relative;
  font-size: 14px;
  height:auto;
  padding:16px;
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
              sx={{maxWidth: '560px', fontFamily: 'body', fontSize: ['18px', '20px'], fontWeight: '300', letterSpacing: '0.03em'}}
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
            maxWidth: '1280px'
          }}
        >

          <Tabs
            sx={{
              borderBottom: '1px solid',
              borderColor: 'primaryBg',
              width: '100%',
              px: '0px',
              display: 'flex',
              justifyContent: ['space-around', 'center']
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
            sx={{pb: '64px', m: '0 auto'}}>
            <Flex
              variant='container.column'
              pt='64px'
              pb={['32px', '32px']}
              sx={{
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text
                variant='bigBody'
                color='primaryBg'
                sx={{
                  maxWidth: '560px',
                  fontFamily: 'heading',
                  lineHeight: 'body',
                  fontWeight: '300'
                }}>
                {stepsTab.description}
              </Text>
            </Flex>
            <Grid columns={[1, 2, null, 4]} sx={{justifyContent: 'center'}}>
              {stepsTab.stepsList.map((item) => {
                const {heading, description, number} = item
                return (
                  <Card variant='steps' key={item._key}>
                    <Flex variant='container.column' sx={{justifyContent: 'start', alignItems: 'center'}}>
                      <Box bg='accent' mb='32px' sx={{height: '64px', width: '64px', borderRadius: '50%'}}>
                        <Text sx={{fontFamily: 'body', fontSize: '48px', lineHeight: '72px'}}>{number}</Text>
                      </Box>
                      <Text as='h3' sx={{fontSize: '24px'}}>
                        {heading}
                      </Text>
                      <Text as='p' variant='body' p='0px'>
                        {description}
                      </Text>
                    </Flex>
                  </Card>
                )
              })}
            </Grid>
            <Flex sx={{width: '100%', justifyContent: 'center', alignItems: 'center', mt: '64px'}}>
              <TextLink toLink='/boka-heilsuvidtal' data-text='bóka heilsuviðtal'>
                Bóka heilsuviðtal
              </TextLink>
            </Flex>

          </Content>
          <Content
            active={active === 1}
            sx={{pb: '64px', m: '0 auto', width: '100%'}}>
            <Flex
              variant='container.column'
              pt='64px'
              pb={['32px', '32px']}
              sx={{
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text
                variant='bigBody'
                color='primaryBg'
                sx={{
                  maxWidth: '560px',
                  fontFamily: 'heading',
                  lineHeight: 'body',
                  fontWeight: '300'
                }}>
                {pricingTab.description}
              </Text>
            </Flex>
            <Grid columns={[1, 2]} sx={{justifyContent: 'center'}}>
              {pricingTab.prices.map((item) => {
                const {plan, amount, payment, info} = item
                return (
                  <Card variant='price' key={item._key}>
                    <Flex bg='primaryBg' sx={{flexDirection: 'column', justifyContent: 'start', alignItems: 'center', flex: 1, flexBasis: '100%'}}>
                      <Box bg='accent' sx={{width: '100%', alignSelf: 'flex-center'}}>
                        <Text as='h3' color='white' variant='eyebrow' sx={{py: '16px'}}>
                          {plan}
                        </Text>
                      </Box>
                      <Flex sx={{height: '180px', flexDirection: 'column', justifyContent: 'center'}}>
                        <Text as='h5'>
                          {amount}{' '}
                        </Text>
                        <Text as='p'>
                          {payment}{' '}
                        </Text>
                      </Flex>
                      <Box bg='primaryMuted' sx={{width: '100%', alignSelf: 'center', py: '16px'}}>
                        <Text as='p'>
                          {info}
                        </Text>
                      </Box>

                    </Flex>
                  </Card>
                )
              })}
            </Grid>
          </Content>
          <Content
            active={active === 2}
            sx={{pb: '64px', m: '0 auto', width: '100%'}}>
            <Flex
              variant='container.column'
              pt='64px'
              pb={['32px', '32px']}
              sx={{
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text
                variant='bigBody'
                color='primaryBg'
                sx={{
                  maxWidth: '560px',
                  fontFamily: 'heading',
                  lineHeight: 'body',
                  fontWeight: '300'
                }}>
                {includedTab.description}
              </Text>
            </Flex>
            <Grid columns={[1, 2]} sx={{justifyContent: 'center'}}>
              {includedTab.includedList.map((item) => {
                const {heading, description} = item
                return (
                  <Card variant='included'>
                    <Grid
                      columns={'24px 1fr'}
                      gap='16px'
                      key={item._key}
                    >
                      <Flex sx={{justifyContent: 'center'}}>
                        <FiArrowRightCircle color='#ff7476' fontSize='24px' />
                      </Flex>
                      <Flex variant='container.column' sx={{textAlign: 'left'}}>
                        <Text as='h3'>
                          {heading}
                        </Text>
                        <Text as='p'>
                          {description}
                        </Text>
                      </Flex>
                    </Grid>
                  </Card>
                )
              })}
            </Grid>
          </Content>

        </Flex>
      </Wrapper>
    </Section>
  )
}

export default HeilsumarkInfo
/* <Card variant='price'>
                    <Grid
                      columns={'24px 1fr'}
                      gap='16px'
                      key={item._key}
                    >
                      <Flex sx={{justifyContent: 'center'}}>
                        <FiArrowRightCircle color='#ff7476' fontSize='24px' />
                      </Flex>
                      <Flex variant='container.column' sx={{textAlign: 'left'}}>
                        <Text as='h3' sx={{fontSize: '24px'}}>
                          {heading}
                        </Text>
                        <Text as='p' variant='body' p='0px'>
                          {description}
                        </Text>
                      </Flex>
                    </Grid>
                  </Card>
                ) */
